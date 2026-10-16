import test from 'node:test';
import assert from 'node:assert/strict';
import { validateInquiryForm, assessMspFit, getPipelineStages } from './qualification.ts';

test('validateInquiryForm detects missing or invalid fields', () => {
  const emptyResult = validateInquiryForm({});
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.fullName);
  assert.ok(emptyResult.errors.workEmail);
  assert.ok(emptyResult.errors.companyName);
  assert.ok(emptyResult.errors.teamSize);
  assert.ok(emptyResult.errors.primaryChallenge);

  // Rejects invalid email syntax
  const invalidEmail = validateInquiryForm({
    fullName: 'David Vance',
    workEmail: 'not-an-email',
    companyName: 'Apex Technology Solutions',
    teamSize: '11-30',
    primaryChallenge: 'Referral plateau',
  });
  assert.equal(invalidEmail.isValid, false);
  assert.ok(invalidEmail.errors.workEmail);

  // Flags consumer webmail
  const webmailResult = validateInquiryForm({
    fullName: 'David Vance',
    workEmail: 'david@gmail.com',
    companyName: 'Apex Technology Solutions',
    teamSize: '11-30',
    primaryChallenge: 'Referral plateau',
  });
  assert.equal(webmailResult.isValid, false);
  assert.ok(webmailResult.errors.workEmail.includes('commercial business email'));

  // Accepts valid business submission
  const validResult = validateInquiryForm({
    fullName: 'David Vance',
    workEmail: 'dvance@apextechmsp.com',
    companyName: 'Apex Technology Solutions',
    teamSize: '11-30',
    primaryChallenge: 'Inconsistent outbound prospecting',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('assessMspFit correctly categorizes established MSP with cybersecurity', () => {
  const result = assessMspFit({
    teamSize: '11-30',
    recurringServices: ['Managed Cybersecurity / MDR', 'Managed IT Services', 'M365 Security & Compliance'],
    onboardingCapacity: '1-2',
    targetDealSize: '$3k-$7k',
    dedicatedSalesLead: true,
  });

  assert.equal(result.fitTier, 'Optimal Fit');
  assert.ok(result.score >= 70);
  assert.ok(result.headline.includes('Strong Strategic Alignment'));
  assert.ok(result.reasons.length >= 3);
});

test('assessMspFit flags early stage or zero-capacity MSP honestly', () => {
  const result = assessMspFit({
    teamSize: '1-10',
    recurringServices: ['Break-Fix Support'],
    onboardingCapacity: 'none',
    targetDealSize: '<$1k',
    dedicatedSalesLead: false,
  });

  assert.equal(result.fitTier, 'Not Recommended Currently');
  assert.ok(result.score < 45);
  assert.ok(result.recommendation.includes('consolidate your recurring service packaging'));
});

test('getPipelineStages returns 4 detailed coherent stages', () => {
  const stages = getPipelineStages();
  assert.equal(stages.length, 4);
  assert.equal(stages[0].number, '01');
  assert.ok(stages[0].deliverables.length >= 3);
  assert.ok(stages[3].title.includes('Qualification'));
});
