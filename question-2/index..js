const array = ['a', 'b', 'c', 'd'];

const setTimer = (time) => new Promise((resolve) => setTimeout(resolve, time));

const question2 = async (array) => {
  let timer = 1000;

  for (const element of array) {
    await setTimer(timer);

    console.log(element);

    timer = timer * 2;
  }
};

await question2(array);
