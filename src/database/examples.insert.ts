import { createHash, randomBytes } from "crypto";
import { EPLogger } from "../utils";
import { nconf } from "../utils";


import { User } from "./models/user.model";
import { Current } from "./models/current.model";
import { Voltaje } from "./models/voltaje.model";

function hashPassword (password: string, salt: string): string {
  return createHash('sha256')
    .update(password)
    .update(createHash("sha256").update(salt, "utf8").digest("hex"))
    .digest("hex");
}

function randomNumberGenerator(min = 0, max = 1, fractionDigits = 0, inclusive = true): number {
  const precision = Math.pow(10, Math.max(fractionDigits, 0));
  const scaledMax = max * precision;
  const scaledMin = min * precision;
  const offset = inclusive ? 1 : 0;
  const num = Math.floor(Math.random() * (scaledMax - scaledMin + offset)) + scaledMin;
  return num / precision;
};

function randomDateGenerator(start: Date, end: Date): string {
  var date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toUTCString();
}


const SEQUELIZE_INSERT_EXAMPLES = async (): Promise<void> => {

  var i:number;
  
  // add user1
  let user1: User = new User();
  user1.userName = "imanolpg";
  user1.salt = randomBytes(4).toString('base64url');
  const user1Password: string = "1234";
  user1.password = hashPassword(user1Password, user1.salt);
  user1.currentLecture = [];
  user1.voltajeLecture = [];
  await user1.save()
  .then(() => {EPLogger.debug("User1 saved!");})
  .catch((e) => {EPLogger.error(`Error saving user1: ${e}`)});

  // insert current measures for user1
  i = 0;
  while (i < nconf.get("SEQUELIZE_USER1_CURRENT_READS")) {
    var current: Current = new Current();
    current.date = randomDateGenerator(new Date("2023-04-10"), new Date("2023-04-14"));
    current.lecture = randomNumberGenerator(0, 30, 2, true);
    current.user = user1.id;
    await current.save()
    .catch((e) => {EPLogger.error(`Error saving current: ${e}`)});

    i++;
  }
  EPLogger.debug("Currents saved for user1");

  // insert voltaje measures for user2
  i = 0;
  while (i < nconf.get("SEQUELIZE_USER1_VOLTAJE_READS")) {
    var voltaje: Voltaje = new Voltaje();
    voltaje.date = randomDateGenerator(new Date("2023-04-10"), new Date("2023-04-14"));
    voltaje.lecture = randomNumberGenerator(3.3, 4.2, 2, true);
    voltaje.cellNumber = randomNumberGenerator(1, 3, 0, true);
    voltaje.user = user1.id;
    await voltaje.save()
    .catch((e) => {EPLogger.error(`Error saving voltaje: ${e}`)});

    i++;
  }
  EPLogger.debug("Voltajes saved for user1");

  // add user2
  let user2: User = new User();
  user2.userName = "javierguti";
  user2.salt = randomBytes(4).toString('base64url');
  const user2Password: string = "holaaaaaaaa";
  user2.password = hashPassword(user2Password, user2.salt);
  user2.currentLecture = [];
  user2.voltajeLecture = [];
  await user2.save()
  .then(() => {EPLogger.debug("User2 saved!");})
  .catch((e) => {EPLogger.error(`Error saving user2: ${e}`)});

  // insert current measures for user2
  i = 0;
  while (i < nconf.get("SEQUELIZE_USER2_CURRENT_READS")) {
    var current: Current = new Current();
    current.date = randomDateGenerator(new Date("2023-04-10"), new Date("2023-04-14"));
    current.lecture = randomNumberGenerator(0, 30, 2, true);
    current.user = user2.id;
    await current.save()
    .catch((e) => {EPLogger.error(`Error saving current: ${e}`)});

    i++;
  }
  EPLogger.debug("Currents save for user2");

  // insert voltaje measures for user2
  i = 0;
  while (i < nconf.get("SEQUELIZE_USER2_VOLTAJE_READS")) {
    var voltaje: Voltaje = new Voltaje();
    voltaje.date = randomDateGenerator(new Date("2023-04-10"), new Date("2023-04-14"));
    voltaje.lecture = randomNumberGenerator(3.3, 4.2, 2, true);
    voltaje.cellNumber = randomNumberGenerator(1, 3, 0, true);
    voltaje.user = user2.id;
    await voltaje.save()
    .catch((e) => {EPLogger.error(`Error saving voltaje: ${e}`)});

    i++;
  }
  EPLogger.debug("Voltajes saved for user2");


  // add user3
  let user3: User = new User();
  user3.userName = "jokkinn";
  user3.salt = randomBytes(4).toString('base64url');
  const user3Password: string = "kokdf.fFF@@sfSDFsss";
  user3.password = hashPassword(user3Password, user3.salt);
  user3.currentLecture = [];
  user3.voltajeLecture = [];
  await user3.save()
  .then(() => {EPLogger.debug("User3 saved!");})
  .catch((e) => {EPLogger.error(`Error saving user3: ${e}`)});

  // insert current measures for user3
  i = 0;
  while (i < nconf.get("SEQUELIZE_USER3_CURRENT_READS")) {
    var current: Current = new Current();
    current.date = randomDateGenerator(new Date("2023-04-10"), new Date("2023-04-14"));
    current.lecture = randomNumberGenerator(0, 30, 2, true);
    current.user = user3.id;
    await current.save()
    .catch((e) => {EPLogger.error(`Error saving current: ${e}`)});

    i++;
  }
  EPLogger.debug("Currents save for user3");

  // insert voltaje measures for user2
  i = 0;
  while (i < nconf.get("SEQUELIZE_USER3_VOLTAJE_READS")) {
    var voltaje: Voltaje = new Voltaje();
    voltaje.date = randomDateGenerator(new Date("2023-04-10"), new Date("2023-04-14"));
    voltaje.lecture = randomNumberGenerator(3.3, 4.2, 2, true);
    voltaje.cellNumber = randomNumberGenerator(1, 3, 0, true);
    voltaje.user = user3.id;
    await voltaje.save()
    .catch((e) => {EPLogger.error(`Error saving voltaje: ${e}`)});

    i++;
  }
  EPLogger.debug("Voltajes saved for user3");
}

export {
  SEQUELIZE_INSERT_EXAMPLES
}