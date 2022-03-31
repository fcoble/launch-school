let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
  ];
  
  console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']


  function allMatches(wordArray, regEx) {
      let finalMatches = [];
      wordArray.forEach(element => {
          if (element.match(regEx)) {
              finalMatches.push(element);
          }
      });
      return finalMatches;
  }