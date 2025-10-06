let accountBalance = 0;
let cashBalance = 0;

function setBalances() {
  accountBalance = parseFloat(document.getElementById("accountBalance").value) || 0;
  cashBalance = parseFloat(document.getElementById("cashBalance").value) || 0;
  addHistory(`Set balances: Account = ${accountBalance}, Cash = ${cashBalance}`);
}

function deposit() {
  let amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) return alert("กรุณาใส่จำนวนเงินให้ถูกต้อง");
  cashBalance -= amount;
  accountBalance += amount;
  addHistory(`Deposit ${amount} บาท -> บัญชี: ${accountBalance}, เงินสด: ${cashBalance}`);
}

function withdraw() {
  let amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) return alert("กรุณาใส่จำนวนเงินให้ถูกต้อง");
  if (accountBalance < amount) return alert("ยอดเงินในบัญชีไม่พอ!");
  accountBalance -= amount;
  cashBalance += amount;
  addHistory(`Withdraw ${amount} บาท -> บัญชี: ${accountBalance}, เงินสด: ${cashBalance}`);
}

function addHistory(msg) {
  const box = document.getElementById("historyBox");
  box.value += msg + "\n";
  box.scrollTop = box.scrollHeight;
}
