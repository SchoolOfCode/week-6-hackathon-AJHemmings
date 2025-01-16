import { expect, test } from "vitest";
import { findProvider } from "./main";

// test("should pass if match found", () => {
//     expect(findProvider("07400742069")).toBe("Network Provider: Three");
//   });


  test("should return correct provider based on prefix", () => {
    let n = "071071234567"
    expect(findProvider(n)).toBe("O2");
  });

  test("should return correct provider based on prefix", () => {
    let n = "99999999999"
    expect(findProvider("99999999999")).toBe("Unknown Provider");
  })

  test("should return correct provider based on prefix", () => {
    let n = "076661234567"
    expect(findProvider(n)).toBe("Skynet");
  });

  test("should return correct provider based on prefix", () => {
    let n = "076661234567"
    expect(findProvider("07448123456")).toBe("Lycamobile");
  });

  test("should return correct provider based on prefix", () => {
    let n = "076661234567"
    expect(findProvider("077771234567")).toBe("BT");
  });

  test("should return correct provider based on prefix", () => {
    let n = "076661234567"
    expect(findProvider("075501234567")).toBe("EE / T-Mobile");
  });

  test("should return correct provider based on prefix", () => {
    let n = "076661234567"
    expect(findProvider("075511234567")).toBe("Vodafone");
  });

  test("should return correct provider based on prefix", () => {
    let n = "076661234567"
    expect(findProvider("07400876543")).toBe("Three");
  });



