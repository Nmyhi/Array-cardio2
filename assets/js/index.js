console.log("hello");

// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?

  const isAdult = people.some(function(person) {
    const currYear = (new Date()).getFullYear();
        if (currYear - person.year >= 19) {
            return true;
        }
  });

  console.log(isAdult);

  // another method 

  const isAdult2 = people.some(person => {
    const currYear2 = (new Date()).getFullYear();
    return currYear2 - person.year >= 19;
  });

  console.log({isAdult2});

  // Array.prototype.every() // is everyone 19 or older?

  const isAdult3 = people.every(person => {
    const currYear3 = (new Date()).getFullYear();
    return currYear3 - person.year >=19;
  });

  console.log(isAdult3);  

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  const findComment = comments.find(comment => {
    if(comment.id === 823423) {
      return true;
    }
  });

  console.log(findComment);

  const findComment2 = comments.find(comment => comment.id === 823423);

  console.log(findComment2);
  
  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
