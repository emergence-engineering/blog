import {
  formats,
  ingredientCategories,
  IngredientCategory,
  UnitEnum,
  unitList,
} from "./database/types";

import { getServerTimestamp } from "./index";

export const defaultUnits: unitList = {
  gramm: {
    unitId: "defaultGramm",
    name: UnitEnum.gramm,
    maxValue: 5000,
    decimal: 0,
  },
  kilogramm: {
    name: UnitEnum.kilogramm,
    unitId: "defaultKilogramm",
    maxValue: 100,
    decimal: 1,
  },

  piece: {
    name: UnitEnum.piece,
    unitId: "defaultPiece",
    maxValue: 20,
    decimal: 0,
  },
  liter: {
    name: UnitEnum.liter,
    unitId: "defaultLiter",
    maxValue: 100,
    decimal: 2,
  },
};
export const defaultFormats: formats = {
  noDecimals: {
    name: "0",
    decimal: 0,
  },
  oneDecimal: {
    name: "0.0",
    decimal: 1,
  },
  twoDecimal: {
    name: "0.00",
    decimal: 2,
  },
};

export const VegatablesId: IngredientCategory = {
  name: "Vegatables",
  ingredients: {
    carrotId: {
      categoryId: "VegetablesId",
      name: "Carrot",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.kilogramm,
      amount: 1,
      isDeleted: false,
    },
    potatoId: {
      categoryId: "VegetablesId",
      name: "Potato",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.kilogramm,
      amount: 1,
      isDeleted: false,
    },
    tomatoId: {
      categoryId: "VegetablesId",
      name: "Tomato",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.kilogramm,
      amount: 1,
      isDeleted: false,
    },
  },
};

export const FruitsId: IngredientCategory = {
  name: "Fruits",
  ingredients: {
    appleId: {
      categoryId: "FruitsId",
      name: "Apple",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.piece,
      amount: 1,
      isDeleted: false,
    },
    orangeId: {
      categoryId: "FruitsId",
      name: "Orange",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.piece,
      amount: 1,
      isDeleted: false,
    },
    pinappleId: {
      categoryId: "FruitsId",
      name: "Pinapple",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.piece,
      amount: 1,
      isDeleted: false,
    },
  },
};
export const MeatsId: IngredientCategory = {
  name: "Meats",
  ingredients: {
    chickenId: {
      categoryId: "MeatsId",
      name: "Chicken",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.gramm,
      amount: 1,
      isDeleted: false,
    },
    horseId: {
      categoryId: "MeatsId",
      name: "Horse",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.gramm,
      amount: 1,
      isDeleted: false,
    },
    catId: {
      categoryId: "MeatsId",
      name: "Cat",
      createdAt: getServerTimestamp(),
      unit: defaultUnits.gramm,
      amount: 1,
      isDeleted: false,
    },
  },
};

export const mockData: ingredientCategories = {
  VegatablesId,
  FruitsId,
  MeatsId,
};
