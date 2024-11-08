let array = [];  // Mảng chứa số nguyên người dùng nhập vào

function addList() {
  const input = document.getElementById('inp').value;
  if (!isNaN(input) && input !== '') {
    array.push(Number(input));
    document.getElementById('list').innerText = JSON.stringify(array);
    document.getElementById('inp').value = '';  // Xóa ô nhập sau khi thêm
  } else {
    alert('Vui lòng nhập một số nguyên hợp lệ!');
  }
}

// 1. Tính tổng các số dương trong mảng
function calculateSumOfPositives() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  alert(`Tổng các số dương: ${sum}`);
}

// 2. Đếm số lượng số dương trong mảng
function positiveNumberCount() {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  alert(`Số lượng số dương: ${count}`);
}

// 3. Tìm số nhỏ nhất trong mảng
function findSmallestNumber() {
  if (array.length === 0) {
    alert('Mảng trống');
    return;
  }
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  alert(`Số nhỏ nhất trong mảng: ${min}`);
}

// 4. Tìm số dương nhỏ nhất trong mảng
function findSmallestPositive() {
  let minPositive = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && (minPositive === null || array[i] < minPositive)) {
      minPositive = array[i];
    }
  }
  alert(`Số dương nhỏ nhất trong mảng: ${minPositive !== null ? minPositive : 'Không có số dương'}`);
}

// 5. Tìm số chẵn cuối cùng trong mảng
function findLasteven() {
  let lastEven = -1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      lastEven = array[i];
      break;
    }
  }
  alert(`Số chẵn cuối cùng trong mảng: ${lastEven}`);
}

// 6. Đổi chỗ hai phần tử trong mảng
function swapElements() {
  const pos1 = parseInt(prompt('Nhập vị trí 1:'));
  const pos2 = parseInt(prompt('Nhập vị trí 2:'));
  if (pos1 < array.length && pos2 < array.length && pos1 >= 0 && pos2 >= 0) {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
    document.getElementById('list').innerText = JSON.stringify(array);
    alert(`Mảng sau khi đổi chỗ: ${JSON.stringify(array)}`);
  } else {
    alert('Vị trí không hợp lệ!');
  }
}

// 7. Sắp xếp mảng theo thứ tự tăng dần
function sortArray() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  document.getElementById('list').innerText = JSON.stringify(array);
  alert('Mảng đã được sắp xếp tăng dần');
}

// 8. Tìm số nguyên tố đầu tiên trong mảng
function findFirstPrime() {
  const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  let firstPrime = -1;
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      firstPrime = array[i];
      break;
    }
  }
  alert(`Số nguyên tố đầu tiên trong mảng: ${firstPrime}`);
}

// 9. Đếm số lượng số nguyên trong mảng số thực
function countIntegerInRealArray() {
  const realArray = prompt('Nhập mảng số thực (các số cách nhau bằng dấu phẩy):').split(',').map(Number);
  let integerCount = 0;
  for (let i = 0; i < realArray.length; i++) {
    if (Number.isInteger(realArray[i])) {
      integerCount++;
    }
  }
  alert(`Số lượng số nguyên trong mảng số thực: ${integerCount}`);
}

// 10. So sánh số lượng số dương và số lượng số âm trong mảng
function comparePositiveAndNegativeCount() {
  let positives = 0;
  let negatives = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positives++;
    } else if (array[i] < 0) {
      negatives++;
    }
  }
  let comparison = 'Số dương và số âm bằng nhau';
  if (positives > negatives) {
    comparison = 'Số dương nhiều hơn số âm';
  } else if (positives < negatives) {
    comparison = 'Số âm nhiều hơn số dương';
  }
  alert(comparison);
}
