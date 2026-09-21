const { login } = require('./auth');

describe('Regression Test - Auth Module (Edge Cases & Exceptions)', () => {
  
  test('Trả về false khi nhập sai mật khẩu', () => {
    const result = login('admin', 'wrong_password');
    expect(result).toBe(false);
  });

  test('Trả về false khi nhập sai username', () => {
    const result = login('wrong_user', '123');
    expect(result).toBe(false);
  });

  test('Ném ra lỗi khi Username rỗng', () => {
    expect(() => login('', '123')).toThrow('Username không được để trống');
  });

  test('Ném ra lỗi khi Password rỗng', () => {
    expect(() => login('admin', '')).toThrow('Mật khẩu không được để trống');
  });

  test('Ném ra lỗi khi đăng nhập bằng Tài khoản bị khóa', () => {
    expect(() => login('locked_user', '123')).toThrow('Tài khoản đã bị khóa');
  });

  test('Ném ra lỗi khi Mật khẩu chứa ký tự đặc biệt không hợp lệ (khoảng trắng)', () => {
    expect(() => login('admin', '12 3')).toThrow('Mật khẩu không được chứa khoảng trắng');
  });

});
