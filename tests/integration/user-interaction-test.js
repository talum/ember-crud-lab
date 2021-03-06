import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Integration: User Interaction', function() {
  var application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('adds a new post', function(){
    visit('/resources/new');
    fillIn('#title', 'Learn Ember Today!');
    fillIn('#url', 'www.emberlearning.com');
    fillIn('#topic', 'Ember');
    fillIn('#description', 'Learn Ember by reading this book.');
    click('#submit');
    
    andThen(function() {
      expect(find('h5:last').text(), 'Learn Ember Today!');
    });
  });

  it('deletes a resource', function() {
    server.create('resource', {
      title: "Hacking 101",
      description: "Be the black hat you always wanted to be!"
    });
    server.createList('resource', 2);

    visit('/resources/1');
    andThen(function() {
      click('#delete');
      andThen(function() {
        expect(find('ul li.resources').length).to.eq(2);
      });
    });
  });

});