const enhancer = require("./enhancer.js");
const { fail } = require("yargs");

// test away!

//----------//
//  Repair  //
//----------//
describe("Repairing", () => {
  it("Restoring durability to 100", () => {
    let item = {
      name: "Crossbow",
      durability: "2",
      enhancement: "20",
    };

    const repairWeapon = enhancer.repair(item);
    expect(repairWeapon.durability).toBe(100);
  });
});


//-----------//
//  Success  //
//-----------//
describe("Success ", () => {
  // enhancement is increased by 1
  it("Successfully increased enhancement by 1 ", () => {
    let enhancedItem = 15;
    let item = {
      name: "Crossbow",
      durability: "100",
      enhancement: enhancedItem,
    };

    const enhanceSuccess = enhancer.success(item);
    expect(enhanceSuccess.enhancement).toBe(enhancedItem + 1);
  });

  it("Enhancement stays at 20", () => {
    let item = {
      name: "Crossbow",
      durability: "25",
      enhancement: "20",
    };

    const enhanceSuccess = enhancer.success(item);
    expect(enhanceSuccess.enhancement).toBe(item.enhancement);
  });
});

//--------//
//  fail  //
//--------//
describe("fail", () => {
  it("durability decreases by 5 ", () => {
    let item = {
      name: "Crossbow",
      durability: 35,
      enhancement: 10,
    };

    const enhanceFail = enhancer.fail(item);
    expect(enhanceFail.durability).toBe(item.durability);
  });

  it("durability decreases by 10 ", () => {
    let item = {
      name: "Crossbow",
      durability: 45,
      enhancement: 18,
    };

    const enhanceFail = enhancer.fail(item);
    expect(enhanceFail.durability).toBe(item.durability);
    expect(enhanceFail.enhancement).toBe(item.enhancement);
  });
});





