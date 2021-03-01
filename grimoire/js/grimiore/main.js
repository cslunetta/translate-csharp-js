console.log("Do you believe in magic?");
console.log("------------------------");

const getAllSpells = () => {
  const allSpells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyReqired: 5.1,
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyReqired: 2.99,
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyReqired: 12.2,
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyReqired: 100.0,
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyReqired: 2921.5,
    },
  ];
  return allSpells;
};

const SpellBook = () => {
  return { Title: "", Spells: [] };
};

const makeEvilSpellBook = (allSpells) => {
  evilBook = SpellBook();
  evilBook.Title = "Evil Book";
  evilBook.Spells = allSpells.filter((spell) => spell.IsEvil === true);
  return evilBook;
};

const makeGoodSpellBook = (allSpells) => {
  goodBook = SpellBook();
  goodBook.Title = "Good Book";
  goodBook.Spells = allSpells.filter((spell) => spell.IsEvil !== true);
  return goodBook;
};

const allSpells = getAllSpells();

const displaySpellBook = (book) => {
  console.log(book.Title);
  for (spell of book.Spells) {
    console.log(`  ${spell.Name}`);
  }
};

displaySpellBook(makeGoodSpellBook(allSpells));
console.log("");
displaySpellBook(makeEvilSpellBook(allSpells));
