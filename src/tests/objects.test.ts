import answers from '../objects';

type ProgramCard = {
  id: number;
  published: Date;
  getNextLiveInfo: (id: number | string) => string;
  title: string;
  relatedIds: number[];
  cleanName: RegExp;
  details: {
    description: string;
    durationMiliseconds: string;
  };
};

describe('objects', () => {
  it('should be able to clone an object correctly', () => {
    const programCard: ProgramCard = {
      id: 501,
      published: new Date(2010, 6, 26),
      getNextLiveInfo: function (id: number | string) {
        return 'http://www.dr.dk/mu-online/api/1.0/programcard/' + id;
      },
      title: 'Kriminalkommissær Barnaby (3)',
      relatedIds: [544, 958],
      cleanName: new RegExp(/[^a-z0-9]+/gi),
      details: {
        description:
          'Det er meget virkeligt blod, der drypper på scenen i landsbyens amatørteater. En opførelse af Amadeus slutter dramatisk med, at Salieri skærer halsen over på sig selv. Men nogen har udskiftet teaterkniven med en rigtig, så Barnaby hvirvles ind i et nyt, kompliceret mordmysterium.',
        durationMiliseconds: '1800000',
      },
    };

    const clonedProgramCard = answers.clone<ProgramCard>(programCard);
    programCard.details.description = 'test';

    expect(clonedProgramCard).not.toStrictEqual(programCard);
    expect(clonedProgramCard.details).not.toStrictEqual(programCard.details)
    expect(clonedProgramCard.details.description).toEqual('Det er meget virkeligt blod, der drypper på scenen i landsbyens amatørteater. En opførelse af Amadeus slutter dramatisk med, at Salieri skærer halsen over på sig selv. Men nogen har udskiftet teaterkniven med en rigtig, så Barnaby hvirvles ind i et nyt, kompliceret mordmysterium.');
    expect(programCard.details.description).toEqual('test');
  });
});
