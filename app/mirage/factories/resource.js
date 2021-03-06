import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: function(){
    return `Learn ${faker.hacker.ingverb()}`;
  },
  description: function(){
    return `This is a great book! ${faker.hacker.phrase()}`;
  },
  url: faker.internet.domainName,
  topic: faker.hacker.noun
});