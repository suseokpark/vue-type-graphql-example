import { sandbox, stub } from 'sinon';
import { UserRepository } from '../../../repository/user/UserRepository';

const user_repository = new UserRepository();
describe('#UserRepository', () => {
  let sandbox;

  beforeAll(async () => {
    sandbox = sandbox.create();
  });

  afterAll(async () => {
    sandbox.restore();
  });

  test('User create', () => {
    const create = stub(user_repository, 'create');
    expect(create({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findOne by UK', () => {
    const findOne = stub(user_repository, 'findOne');
    expect(findOne({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAll', () => {
    const findAll = stub(user_repository, 'findAll');
    expect(findAll().then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAllByIds', () => {
    const findAllByIds = stub(user_repository, 'findAllByIds');
    expect(findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAllByPaging', () => {
    const findAllByPaging = stub(user_repository, 'findAllByPaging');
    expect(findAllByPaging({email: 'shun10114@gmail.com', name: ''}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User update', () => {
    const update = stub(user_repository, 'update');
    expect(update({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User delete', () => {
    const deleteUser = stub(user_repository, 'delete');
    expect(deleteUser({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });
});
