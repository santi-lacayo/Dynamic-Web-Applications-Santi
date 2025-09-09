//all the data that will be placed inside the card is coming from this js
export const RECIPE = {
    title: 'Buttermilk Pancakes',
    imgSrc: require('../../src/assets/Easy-Fluffy-Pancakes-Recipe-3-3126621102.jpg'),
    description:
      'Some sort of lovely description about the best buttermilk pancakes in the world.',
    //names are important so later you can map each list into the card
    ingredients: [
      '3/4 cup Melted butter',
      '2 tbsp Whole milk',
      '1 Egg',
      '3/4 cup All purpose flour',
      '2 tsp Baking powder',
      '2 tbsp Sugar',
      '1/2 tsp Salt',
    ],
    instructions: [
      'Melt butter',
      'Beat lightly: milk, butter, egg',
      'Add: flour, baking powder, sugar, salt',
      'Mix',
      'Melt a little butter in the pan',
      'Drop batter by tablespoon into the pan',
      'Turn pancakes over when the top is full of little holes and teh base is golden',
    ],

    recommendations: [
        'Add honey to give it a sweeter taste',
        'Add berries if you like to mix flavors',
        'Add whiped cream on top for better look',
    ],
  }