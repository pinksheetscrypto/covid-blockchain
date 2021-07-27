const covid = require('../../util/covid');

describe('covid', () => {
  it('converts number mojo to covid', () => {
    const result = covid.mojo_to_covid(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to covid', () => {
    const result = covid.mojo_to_covid('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to covid string', () => {
    const result = covid.mojo_to_covid_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to covid string', () => {
    const result = covid.mojo_to_covid_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number covid to mojo', () => {
    const result = covid.covid_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string covid to mojo', () => {
    const result = covid.covid_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = covid.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = covid.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = covid.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = covid.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = covid.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = covid.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
