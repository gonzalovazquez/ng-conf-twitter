import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgConfTwitterAppComponent } from '../app/ng-conf-twitter.component';

beforeEachProviders(() => [NgConfTwitterAppComponent]);

describe('App: NgConfTwitter', () => {
  it('should create the app',
      inject([NgConfTwitterAppComponent], (app: NgConfTwitterAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-conf-twitter works!\'',
      inject([NgConfTwitterAppComponent], (app: NgConfTwitterAppComponent) => {
    expect(app.title).toEqual('ng-conf-twitter works!');
  }));
});
