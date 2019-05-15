// @tslint-ignore

import { shallowMount } from '@vue/test-utils'
import User from '@/models/User';

//TODO: set test Database

describe('ORM.Base.Model', () => {
  it('get by ID successfully', async () => {



      let data = { email: "a@a.com" , name: "tes&*GSJDI*(&t"};

      var user1 =  new User();
      user1.deserialize(data);

      // step1: test constructor & deserialize
      expect( user1.COLLECTION).toBe("users");
      expect( user1.email).toBe(data.email);
      expect( user1.name).toBe(data.name);


      // step2: test insert
      await user1.insert();
      expect( user1.id).not.toBe(null);

      var user2 = await new User().getById(user1.id);
      expect( user2.id).not.toBe(null);

      expect( (<User>user2)['name']).toBe(user1['name'])
      expect( user2.id).toBe(user1.id);


      //TODO: delete data after test
  })
})
