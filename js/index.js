"use strict";

// open button counter
let openBtns = 0;

// buttons
const currentAssetsBtn = document.querySelector(".add-current-assets-btn");
const investmentsBtn = document.querySelector(".add-investments-btn");
const intangiblesBtn = document.querySelector(".add-intangibles-btn");
const currentLiabilitiesBtn = document.querySelector(
  ".add-current-liabilities-btn"
);
const longTermLiabilitiesBtn = document.querySelector(
  ".add-long-term-liabilities-btn"
);

//! CHECK AND DISPLAY CALCULATE POSITION BUTTON
function checkAndDisplayCalculateBtn() {
  if (openBtns == 5) {
    const totalPositionContainerDiv = document.querySelector(
      ".total-position-container"
    );
    const calculatePositionBtn = document.createElement("button");
    calculatePositionBtn.textContent = "Calculate Position";
    calculatePositionBtn.classList.add("calculate-position-btn");

    totalPositionContainerDiv.prepend(calculatePositionBtn);

    //! CALCULATE POSITION EVENT LISTENER
    calculatePositionBtn.addEventListener("click", () => {
      // assets
      const cash = parseFloat(document.querySelector("#cash").value) || 0;
      const inventory =
        parseFloat(document.querySelector("#inventory").value) || 0;
      const supplies =
        parseFloat(document.querySelector("#supplies").value) || 0;
      const tempInvestments =
        parseFloat(document.querySelector("#temp-investments1").value) || 0;

      // investments
      const land = parseFloat(document.querySelector("#land").value) || 0;
      const building =
        parseFloat(document.querySelector("#building").value) || 0;
      const equipment =
        parseFloat(document.querySelector("#equipment").value) || 0;
      const tempInvestments2 =
        parseFloat(document.querySelector("#temp-investments2").value) || 0;

      // intangibles
      const tradeNames =
        parseFloat(document.querySelector("#trade-names").value) || 0;
      const goodwill =
        parseFloat(document.querySelector("#goodwill").value) || 0;

      // current liabilities
      const accountsPayable =
        parseFloat(document.querySelector("#accounts-payable").value) || 0;
      const notesPayable =
        parseFloat(document.querySelector("#notes-payable1").value) || 0;
      const interestPayable =
        parseFloat(document.querySelector("#interest-payable").value) || 0;
      const wagesPayable =
        parseFloat(document.querySelector("#wages-payable").value) || 0;
      const accruedExpenses =
        parseFloat(document.querySelector("#accrued-expenses").value) || 0;

      // long term liabilities
      const notesPayable2 =
        parseFloat(document.querySelector("#notes-payable2").value) || 0;
      const bondsPayable =
        parseFloat(document.querySelector("#bonds-payable").value) || 0;

      // Calculate totals for each section
      const totalCurrentAssets = cash + inventory + supplies + tempInvestments;
      const totalInvestments = land + building + equipment + tempInvestments2;
      const totalIntangibles = tradeNames + goodwill;
      const totalCurrentLiabilities =
        accountsPayable +
        notesPayable +
        interestPayable +
        wagesPayable +
        accruedExpenses;
      const totalLongTermLiabilities = notesPayable2 + bondsPayable;

      // Update totals in the respective paragraphs
      document.querySelector(
        ".total-current-assets"
      ).textContent = `Total Current Assets: $${totalCurrentAssets.toFixed(2)}`;
      document.querySelector(
        ".total-investments"
      ).textContent = `Total Investments: $${totalInvestments.toFixed(2)}`;
      document.querySelector(
        ".total-intangibles"
      ).textContent = `Total Intangibles: $${totalIntangibles.toFixed(2)}`;
      document.querySelector(
        ".total-current-liabilities"
      ).textContent = `Total Current Liabilities: $${totalCurrentLiabilities.toFixed(
        2
      )}`;
      document.querySelector(
        ".total-long-term-liabilities"
      ).textContent = `Total Long Term Liabilities: $${totalLongTermLiabilities.toFixed(
        2
      )}`;

      // Calculate and display the total position
      //total assets
      const totalAssets =
        totalCurrentAssets + totalInvestments + totalIntangibles;
      const totalAssetsAmount = document.querySelector(".total-assets-amount");
      totalAssetsAmount.textContent = `$${totalAssets.toFixed(2)}`;

      //total liabilities
      const totalLiabilities =
        totalCurrentLiabilities + totalLongTermLiabilities;
      const totalLiabilitiesAmount = document.querySelector(
        ".total-liabilities-amount"
      );
      totalLiabilitiesAmount.textContent = `$${totalLiabilities.toFixed(2)}`;

      //total position
      const totalPosition = totalAssets - totalLiabilities;
      const totalPositionAmount = document.querySelector(".position-amount");
      totalPositionAmount.textContent = `$${totalPosition.toFixed(2)}`;
    });
  }
}

//! CURRENT ASSETS EVENT LISTENER
currentAssetsBtn.addEventListener("click", () => {
  openBtns += 1;
  checkAndDisplayCalculateBtn();

  // assets container div
  const assetsContainerDiv = document.querySelector(".assets-container");

  //@ CASH INPUT
  const cashDiv = document.createElement("div");
  const cashLabel = document.createElement("label");
  cashLabel.textContent = "Cash:";
  cashLabel.setAttribute("for", "cash");
  const cashInput = document.createElement("input");
  cashInput.setAttribute("type", "text");
  cashInput.setAttribute("name", "cash");
  cashInput.setAttribute("id", "cash");
  cashInput.classList.add("assets-text-box");

  //@ INVENTORY INPUT
  const inventoryDiv = document.createElement("div");
  const inventoryLabel = document.createElement("label");
  inventoryLabel.textContent = "Inventory:";
  inventoryLabel.setAttribute("for", "inventory");
  const inventoryInput = document.createElement("input");
  inventoryInput.setAttribute("type", "text");
  inventoryInput.setAttribute("name", "inventory");
  inventoryInput.setAttribute("id", "inventory");
  inventoryInput.classList.add("assets-text-box");

  //@ SUPPLIES INPUT
  const suppliesDiv = document.createElement("div");
  const suppliesLabel = document.createElement("label");
  suppliesLabel.textContent = "Supplies:";
  suppliesLabel.setAttribute("for", "supplies");
  const suppliesInput = document.createElement("input");
  suppliesInput.setAttribute("type", "text");
  suppliesInput.setAttribute("name", "supplies");
  suppliesInput.setAttribute("id", "supplies");
  suppliesInput.classList.add("assets-text-box");

  //@ TEMPORARY INVESTMENTS INPUT
  const tempInvestmentsDiv1 = document.createElement("div");
  const tempInvestmentsLabel1 = document.createElement("label");
  tempInvestmentsLabel1.textContent = "Temporary Investments:";
  tempInvestmentsLabel1.setAttribute("for", "temp-investments1");
  const tempInvestmentsInput1 = document.createElement("input");
  tempInvestmentsInput1.setAttribute("type", "text");
  tempInvestmentsInput1.setAttribute("name", "temp-investments1");
  tempInvestmentsInput1.setAttribute("id", "temp-investments1");
  tempInvestmentsInput1.classList.add("assets-text-box");

  //@ TOTAL CURRENT ASSETS
  const totalCurrentAssetsParagraph = document.createElement("p");
  totalCurrentAssetsParagraph.textContent = `Total Current Assets:`;
  totalCurrentAssetsParagraph.classList.add("total-current-assets");

  //@ BUILD TO DOM
  assetsContainerDiv.appendChild(cashDiv);
  cashDiv.appendChild(cashLabel);
  cashDiv.appendChild(cashInput);
  assetsContainerDiv.appendChild(inventoryDiv);
  inventoryDiv.appendChild(inventoryLabel);
  inventoryDiv.appendChild(inventoryInput);
  assetsContainerDiv.appendChild(suppliesDiv);
  suppliesDiv.appendChild(suppliesLabel);
  suppliesDiv.appendChild(suppliesInput);
  assetsContainerDiv.appendChild(tempInvestmentsDiv1);
  tempInvestmentsDiv1.appendChild(tempInvestmentsLabel1);
  tempInvestmentsDiv1.appendChild(tempInvestmentsInput1);
  assetsContainerDiv.appendChild(totalCurrentAssetsParagraph);
  currentAssetsBtn.style.display = "none";
});

//! INVESTMENTS EVENT LISTENER
investmentsBtn.addEventListener("click", () => {
  openBtns += 1;
  checkAndDisplayCalculateBtn();

  // investments container div
  const investmentsContainerDiv = document.querySelector(
    ".investments-container"
  );

  //@ LAND INPUT
  const landDiv = document.createElement("div");
  const landLabel = document.createElement("label");
  landLabel.textContent = "Land:";
  landLabel.setAttribute("for", "land");
  const landInput = document.createElement("input");
  landInput.setAttribute("type", "text");
  landInput.setAttribute("name", "land");
  landInput.setAttribute("id", "land");
  landInput.classList.add("investments-text-box");

  //@ BUILDING AND IMPROVEMENT INPUT
  const buildingDiv = document.createElement("div");
  const buildingLabel = document.createElement("label");
  buildingLabel.textContent = "Building and Improvements:";
  buildingLabel.setAttribute("for", "building");
  const buildingInput = document.createElement("input");
  buildingInput.setAttribute("type", "text");
  buildingInput.setAttribute("name", "building");
  buildingInput.setAttribute("id", "building");
  buildingInput.classList.add("investments-text-box");

  //@ EQUIPMENT INPUT
  const equipmentDiv = document.createElement("div");
  const equipmentLabel = document.createElement("label");
  equipmentLabel.textContent = "Equipment:";
  equipmentLabel.setAttribute("for", "equipment");
  const equipmentInput = document.createElement("input");
  equipmentInput.setAttribute("type", "text");
  equipmentInput.setAttribute("name", "equipment");
  equipmentInput.setAttribute("id", "equipment");
  equipmentInput.classList.add("investments-text-box");

  //@ TEMPORARY INVESTMENTS INPUT
  const tempInvestmentsDiv2 = document.createElement("div");
  const tempInvestmentsLabel2 = document.createElement("label");
  tempInvestmentsLabel2.textContent = "Temporary Investments:";
  tempInvestmentsLabel2.setAttribute("for", "temp-investments2");
  const tempInvestmentsInput2 = document.createElement("input");
  tempInvestmentsInput2.setAttribute("type", "text");
  tempInvestmentsInput2.setAttribute("name", "temp-investments2");
  tempInvestmentsInput2.setAttribute("id", "temp-investments2");
  tempInvestmentsInput2.classList.add("investments-text-box");

  //@ TOTAL INVESTMENTS
  const totalInvestmentsParagraph = document.createElement("p");
  totalInvestmentsParagraph.textContent = `Total Investments:`;
  totalInvestmentsParagraph.classList.add("total-investments");

  //@ BUILD TO DOM
  investmentsContainerDiv.appendChild(landDiv);
  landDiv.appendChild(landLabel);
  landDiv.appendChild(landInput);
  investmentsContainerDiv.appendChild(buildingDiv);
  buildingDiv.appendChild(buildingLabel);
  buildingDiv.appendChild(buildingInput);
  investmentsContainerDiv.appendChild(equipmentDiv);
  equipmentDiv.appendChild(equipmentLabel);
  equipmentDiv.appendChild(equipmentInput);
  investmentsContainerDiv.appendChild(tempInvestmentsDiv2);
  tempInvestmentsDiv2.appendChild(tempInvestmentsLabel2);
  tempInvestmentsDiv2.appendChild(tempInvestmentsInput2);
  investmentsContainerDiv.appendChild(totalInvestmentsParagraph);
  investmentsBtn.style.display = "none";
});

//! INTANGIBLES EVENT LISTENER
intangiblesBtn.addEventListener("click", () => {
  openBtns += 1;
  checkAndDisplayCalculateBtn();

  // intangibles container div
  const intangiblesContainerDiv = document.querySelector(
    ".intangibles-container"
  );

  //@ TRADE NAMES INPUT
  const tradeNamesDiv = document.createElement("div");
  const tradeNamesLabel = document.createElement("label");
  tradeNamesLabel.textContent = "Trade Names:";
  tradeNamesLabel.setAttribute("for", "trade-names");
  const tradeNamesInput = document.createElement("input");
  tradeNamesInput.setAttribute("type", "text");
  tradeNamesInput.setAttribute("name", "trade-names");
  tradeNamesInput.setAttribute("id", "trade-names");
  tradeNamesInput.classList.add("intangibles-text-box");

  //@ GOODWILL INPUT
  const goodwillDiv = document.createElement("div");
  const goodwillLabel = document.createElement("label");
  goodwillLabel.textContent = "Goodwill:";
  goodwillLabel.setAttribute("for", "goodwill");
  const goodwillInput = document.createElement("input");
  goodwillInput.setAttribute("type", "text");
  goodwillInput.setAttribute("name", "goodwill");
  goodwillInput.setAttribute("id", "goodwill");
  goodwillInput.classList.add("intangibles-text-box");

  //@ TOTAL INTANGIBLES
  const totalIntangiblesParagraph = document.createElement("p");
  totalIntangiblesParagraph.textContent = `Total Intangibles:`;
  totalIntangiblesParagraph.classList.add("total-intangibles");

  //@ BUILD TO DOM
  intangiblesContainerDiv.appendChild(tradeNamesDiv);
  tradeNamesDiv.appendChild(tradeNamesLabel);
  tradeNamesDiv.appendChild(tradeNamesInput);
  intangiblesContainerDiv.appendChild(goodwillDiv);
  goodwillDiv.appendChild(goodwillLabel);
  goodwillDiv.appendChild(goodwillInput);
  intangiblesContainerDiv.appendChild(totalIntangiblesParagraph);
  intangiblesBtn.style.display = "none";
});

//! CURRENT LIABILITIES EVENT LISTENER
currentLiabilitiesBtn.addEventListener("click", () => {
  openBtns += 1;
  checkAndDisplayCalculateBtn();

  // current liabilities container div
  const currentLiabilitiesContainerDiv = document.querySelector(
    ".current-liabilities-container"
  );

  //@ ACCOUNTS PAYABLE INPUT
  const accountsPayableDiv = document.createElement("div");
  const accountsPayableLabel = document.createElement("label");
  accountsPayableLabel.textContent = "Accounts Payable:";
  accountsPayableLabel.setAttribute("for", "accounts-payable");
  const accountsPayableInput = document.createElement("input");
  accountsPayableInput.setAttribute("type", "text");
  accountsPayableInput.setAttribute("name", "accounts-payable");
  accountsPayableInput.setAttribute("id", "accounts-payable");
  accountsPayableInput.classList.add("current-liabilities-text-box");

  //@ NOTES PAYABLE INPUT
  const notesPayableDiv1 = document.createElement("div");
  const notesPayableLabel1 = document.createElement("label");
  notesPayableLabel1.textContent = "Notes Payable:";
  notesPayableLabel1.setAttribute("for", "notes-payable1");
  const notesPayableInput = document.createElement("input");
  notesPayableInput.setAttribute("type", "text");
  notesPayableInput.setAttribute("name", "notes-payable1");
  notesPayableInput.setAttribute("id", "notes-payable1");
  notesPayableInput.classList.add("current-liabilities-text-box");

  //@ INTEREST PAYABLE INPUT
  const interestPayableDiv = document.createElement("div");
  const interestPayableLabel = document.createElement("label");
  interestPayableLabel.textContent = "Interest Payable:";
  interestPayableLabel.setAttribute("for", "interest-payable");
  const interestPayableInput = document.createElement("input");
  interestPayableInput.setAttribute("type", "text");
  interestPayableInput.setAttribute("name", "interest-payable");
  interestPayableInput.setAttribute("id", "interest-payable");
  interestPayableInput.classList.add("current-liabilities-text-box");

  //@ WAGES PAYABLE INPUT
  const wagesPayableDiv = document.createElement("div");
  const wagesPayableLabel = document.createElement("label");
  wagesPayableLabel.textContent = "Wages Payable:";
  wagesPayableLabel.setAttribute("for", "wages-payable");
  const wagesPayableInput = document.createElement("input");
  wagesPayableInput.setAttribute("type", "text");
  wagesPayableInput.setAttribute("name", "wages-payable");
  wagesPayableInput.setAttribute("id", "wages-payable");
  wagesPayableInput.classList.add("current-liabilities-text-box");

  //@ ACCRUED EXPENSES INPUT
  const accruedExpensesDiv = document.createElement("div");
  const accruedExpensesLabel = document.createElement("label");
  accruedExpensesLabel.textContent = "Accrued Expenses:";
  accruedExpensesLabel.setAttribute("for", "accrued-expenses");
  const accruedExpensesInput = document.createElement("input");
  accruedExpensesInput.setAttribute("type", "text");
  accruedExpensesInput.setAttribute("name", "accrued-expenses");
  accruedExpensesInput.setAttribute("id", "accrued-expenses");
  accruedExpensesInput.classList.add("current-liabilities-text-box");

  //@ TOTAL CURRENT LIABILITIES
  const totalCurrentLiabilitiesParagraph = document.createElement("p");
  totalCurrentLiabilitiesParagraph.textContent = `Total Current Liabilities:`;
  totalCurrentLiabilitiesParagraph.classList.add("total-current-liabilities");

  //@ BUILD TO DOM
  currentLiabilitiesContainerDiv.appendChild(accountsPayableDiv);
  accountsPayableDiv.appendChild(accountsPayableLabel);
  accountsPayableDiv.appendChild(accountsPayableInput);
  currentLiabilitiesContainerDiv.appendChild(notesPayableDiv1);
  notesPayableDiv1.appendChild(notesPayableLabel1);
  notesPayableDiv1.appendChild(notesPayableInput);
  currentLiabilitiesContainerDiv.appendChild(interestPayableDiv);
  interestPayableDiv.appendChild(interestPayableLabel);
  interestPayableDiv.appendChild(interestPayableInput);
  currentLiabilitiesContainerDiv.appendChild(wagesPayableDiv);
  wagesPayableDiv.appendChild(wagesPayableLabel);
  wagesPayableDiv.appendChild(wagesPayableInput);
  currentLiabilitiesContainerDiv.appendChild(accruedExpensesDiv);
  accruedExpensesDiv.appendChild(accruedExpensesLabel);
  accruedExpensesDiv.appendChild(accruedExpensesInput);
  currentLiabilitiesContainerDiv.appendChild(totalCurrentLiabilitiesParagraph);
  currentLiabilitiesBtn.style.display = "none";
});

//! LONG TERM LIABILITIES EVENT LISTENER
longTermLiabilitiesBtn.addEventListener("click", () => {
  openBtns += 1;
  checkAndDisplayCalculateBtn();

  // long term liabilities container div
  const longTermLiabilitiesContainerDiv = document.querySelector(
    ".long-term-liabilities-container"
  );

  //@ NOTES PAYABLE INPUT
  const notesPayableDiv2 = document.createElement("div");
  const notesPayableLabel2 = document.createElement("label");
  notesPayableLabel2.textContent = "Notes Payable:";
  notesPayableLabel2.setAttribute("for", "notes-payable2");
  const notesPayableInput = document.createElement("input");
  notesPayableInput.setAttribute("type", "text");
  notesPayableInput.setAttribute("name", "notes-payable2");
  notesPayableInput.setAttribute("id", "notes-payable2");
  notesPayableInput.classList.add("long-term-liabilities-text-box");

  //@ BONDS PAYABLE INPUT
  const bondsPayableDiv = document.createElement("div");
  const bondsPayableLabel = document.createElement("label");
  bondsPayableLabel.textContent = "Bonds Payable:";
  bondsPayableLabel.setAttribute("for", "bonds-payable");
  const bondsPayableInput = document.createElement("input");
  bondsPayableInput.setAttribute("type", "text");
  bondsPayableInput.setAttribute("name", "bonds-payable");
  bondsPayableInput.setAttribute("id", "bonds-payable");
  bondsPayableInput.classList.add("long-term-liabilities-text-box");

  //@ TOTAL LONG TERM LIABILITIES
  const totalLongTermLiabilitiesParagraph = document.createElement("p");
  totalLongTermLiabilitiesParagraph.textContent = `Total Long Term Liabilities:`;
  totalLongTermLiabilitiesParagraph.classList.add(
    "total-long-term-liabilities"
  );

  //@ BUILD TO DOM
  longTermLiabilitiesContainerDiv.appendChild(notesPayableDiv2);
  notesPayableDiv2.appendChild(notesPayableLabel2);
  notesPayableDiv2.appendChild(notesPayableInput);
  longTermLiabilitiesContainerDiv.appendChild(bondsPayableDiv);
  bondsPayableDiv.appendChild(bondsPayableLabel);
  bondsPayableDiv.appendChild(bondsPayableInput);
  longTermLiabilitiesContainerDiv.appendChild(
    totalLongTermLiabilitiesParagraph
  );
  longTermLiabilitiesBtn.style.display = "none";
});
