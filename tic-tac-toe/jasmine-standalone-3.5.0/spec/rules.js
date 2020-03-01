describe('Test isEmpty', function() {
  var ep;

	beforeEach(function() {
        ep = new Rules();
    });

		describe("isEmpty", function(){


	        it("non-empty string should be able to return false", function() {
	            expect(ep.isEmpty("abcde")).toEqual(false);
	        });


	        it("empty string should be able to return true", function() {
	            expect(ep.isEmpty("")).toEqual(true);
	        });


	        it("undefined should be able to return true", function() {
	            expect(ep.isEmpty(undefined)).toEqual(true);
	        });

	    });
	});
