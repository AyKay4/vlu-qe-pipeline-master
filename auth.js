function login(username, password) {
  if (!username || username.trim() === '') {
    throw new Error('Username không được để trống');
  }

  // 2. Kiểm tra mật khẩu rỗng
  if (!password || password.trim() === '') {
    throw new Error('Mật khẩu không được để trống');
  }

  // 3. Kiểm tra tài khoản bị khóa
  if (username === 'locked_user') {
    throw new Error('Tài khoản đã bị khóa');
  }

  // 4. Kiểm tra mật khẩu chứa ký tự đặc biệt không hợp lệ (ví dụ: cấm chứa khoảng trắng)
  if (/\s/.test(password)) {
    throw new Error('Mật khẩu không được chứa khoảng trắng');
  }

  // 5. Kiểm tra thông tin đăng nhập đúng (Happy Path)
  if (username === 'admin' && password === '9999') {
    return true;
  }

  // 6. Trường hợp mật khẩu hoặc username sai
  return false;
}

module.exports = { login };
