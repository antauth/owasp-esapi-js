//jshint quotmark:false
/*global module:false, test:false */
/*global ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false */

	'use strict';
	/*
	 ======== A Handy Little QUnit Reference ========
	 http://docs.jquery.com/QUnit

	 Test methods:
	 expect(numAssertions)
	 stop(increment)
	 start(decrement)
	 Test assertions:
	 ok(value, [message])
	 equal(actual, expected, [message])
	 notEqual(actual, expected, [message])
	 deepEqual(actual, expected, [message])
	 notDeepEqual(actual, expected, [message])
	 strictEqual(actual, expected, [message])
	 notStrictEqual(actual, expected, [message])
	 raises(block, [expected], [message])
	 */

	module('OWASP::ESAPI', {
		setup: function () {

		}
	});

	test('the base function exists', function() {
		ok(org.owasp.esapi, 'org.owasp.esapi exists');
		ok(org.owasp.esapi.codecs.UTF8, 'org.owasp.esapi.codecs.UTF8 exists');
	});

	module('Validation Rules', {
		beforeEach: function () { org.owasp.esapi.ESAPI.initialize(); }
	});

	test('integer validation', function() {
		var rule = new org.owasp.esapi.reference.validation.IntegerValidationRule( "testTypeName", null, org.owasp.esapi.i18n.Locale.US, 0, 100);
		notOk( rule.isValid( "Test", "someString"), 'strings are not valid integers');
		ok( rule.isValid("Test", "9"), 'integers are valid if passed as strings' );
		notOk( rule.isValid("Test", "-1"), 'integers less than min value will fail');
		notOk( rule.isValid("Test", "101"), 'integers greater than max value will fail');
		notOk( rule.isValid("Test", "9.2"), 'floats are not valid' );

	});

	test('credit card validation', function() {
		var rule = new org.owasp.esapi.reference.validation.CreditCardValidationRule( "Test", null, org.owasp.esapi.i18n.Locale.US );
		notOk( rule.isValid( "Test", "Test" ), 'invalid string' );
	});
	



