describe('calculations test', function() {
    it('should calculate the monthly rate correctly', function () {
      const values = {
        amount: 10000,
        years: 10, 
        rate: 4.5
      };
      expect(calculateMonthlyPayment(values)).toEqual('103.64')
    });
    
    
    it("should return a result with 2 decimal places", function() {
      const values = {
        amount: 207000, 
        years: 15,
        rate: 7.1
      };
      expect(calculateMonthlyPayment(values)).toEqual('1872.17');
    });
    
    it("should handle high interest rates", function() {
      const values = {
        amount: 1000,
        years: 40,
        rate: 99
      };
      expect(calculateMonthlyPayment(values)).toEqual('82.50');
    })
  });
  
  
  /// etc
  