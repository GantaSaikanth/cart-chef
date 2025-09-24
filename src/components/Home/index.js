import { Component } from "react"
import { Link } from "react-router-dom";
import "./index.css"

const tabsList = [
  { id: 1, tabName: "Starters" }, { id: 2, tabName: "Main Courses" }, { id: 3, tabName: "Desserts" }, { id: 4, tabName: "Sides" }
]

const dishes = [
  // ⭐ Main Course
  {
    dishId: 1,
    categoryId: 2,
    categoryName: "Main Course",
    name: "Paneer Butter Masala",
    description: "A rich and creamy curry made with paneer cubes cooked in tomato and butter gravy.",
    image: "https://res.cloudinary.com/dnvtpszvn/image/upload/v1758053795/download_esl393.jpg",
    isAdded: false,
    serves: 2,
    type: "Veg",
    ingredients: [
      { id: "ing1", name: "Paneer", quantity: "200g", serves: 2 },
      { id: "ing2", name: "Tomato", quantity: "3 medium", serves: 2 },
      { id: "ing3", name: "Butter", quantity: "2 tbsp", serves: 2 },
      { id: "ing4", name: "Cream", quantity: "3 tbsp", serves: 2 }
    ]
  },
  {
    dishId: 2,
    categoryId: 2,
    categoryName: "Main Course",
    name: "Chicken Biryani",
    description: "A fragrant rice dish made with basmati rice, chicken, and aromatic spices.",
    image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
    isAdded: false,
    type: "Non-Veg",
    serves: 4,
    ingredients: [
      { id: "ing5", name: "Chicken", quantity: "500g", serves: 4 },
      { id: "ing6", name: "Basmati Rice", quantity: "2 cups", serves: 4 },
      { id: "ing7", name: "Onion", quantity: "2 large", serves: 4 },
      { id: "ing8", name: "Biryani Masala", quantity: "2 tbsp", serves: 4 }
    ]
  },
  {
    dishId: 3,
    categoryId: 2,
    categoryName: "Main Course",
    name: "Dal Tadka",
    description: "Yellow lentils cooked with Indian spices and finished with a ghee tadka.",
    image: "https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg",
    isAdded: false,
    serves: 3,
    type: "Veg",
    ingredients: [
      { id: "ing9", name: "Toor Dal", quantity: "1 cup", serves: 3 },
      { id: "ing10", name: "Onion", quantity: "1 medium", serves: 3 },
      { id: "ing11", name: "Tomato", quantity: "1 medium", serves: 3 },
      { id: "ing12", name: "Ghee", quantity: "2 tbsp", serves: 3 }
    ]
  },
  {
    dishId: 13,
    categoryId: 2,
    categoryName: "Main Course",
    name: "Butter Chicken",
    description: "Tender chicken cooked in a creamy tomato-based gravy with butter and spices.",
    image: "https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg",
    isAdded: false,
    serves: 3,
    type: "Non-Veg",
    ingredients: [
      { id: "ing13", name: "Chicken", quantity: "400g", serves: 3 },
      { id: "ing14", name: "Tomato Puree", quantity: "1 cup", serves: 3 },
      { id: "ing15", name: "Butter", quantity: "3 tbsp", serves: 3 },
      { id: "ing16", name: "Cream", quantity: "4 tbsp", serves: 3 }
    ]
  },
  {
    dishId: 14,
    categoryId: 2,
    categoryName: "Main Course",
    name: "Fish Curry",
    description: "Spicy and tangy curry made with fresh fish and tamarind base.",
    image: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    isAdded: false,
    type: "Non-Veg",
    serves: 3,
    ingredients: [
      { id: "ing17", name: "Fish", quantity: "500g", serves: 3 },
      { id: "ing18", name: "Tamarind Pulp", quantity: "2 tbsp", serves: 3 },
      { id: "ing19", name: "Onion", quantity: "2 medium", serves: 3 },
      { id: "ing20", name: "Spices", quantity: "2 tbsp", serves: 3 }
    ]
  },

  // ⭐ Sides
  {
    dishId: 4,
    categoryId: 4,
    categoryName: "Sides",
    name: "Garlic Naan",
    description: "Soft and fluffy Indian bread topped with garlic and butter, served hot.",
    image: "https://res.cloudinary.com/dnvtpszvn/image/upload/v1758053905/download_1_yqctfs.jpg",
    isAdded: false,
    serves: 4,
    type: "Veg",
    ingredients: [
      { id: "ing21", name: "All-purpose Flour", quantity: "2 cups", serves: 4 },
      { id: "ing22", name: "Garlic", quantity: "4 cloves", serves: 4 },
      { id: "ing23", name: "Butter", quantity: "2 tbsp", serves: 4 },
      { id: "ing24", name: "Yeast", quantity: "1 tsp", serves: 4 }
    ]
  },
  {
    dishId: 5,
    categoryId: 4,
    categoryName: "Sides",
    name: "French Fries",
    description: "Crispy golden potato fries sprinkled with salt and served with ketchup.",
    image: "https://res.cloudinary.com/dnvtpszvn/image/upload/v1758053905/download_2_wkjrnh.jpg",
    isAdded: false,
    serves: 3,
    type: "Veg",
    ingredients: [
      { id: "ing25", name: "Potatoes", quantity: "3 large", serves: 3 },
      { id: "ing26", name: "Oil", quantity: "500ml", serves: 3 },
      { id: "ing27", name: "Salt", quantity: "to taste", serves: 3 }
    ]
  },
  {
    dishId: 6,
    categoryId: 4,
    categoryName: "Sides",
    name: "Coleslaw",
    description: "A refreshing salad made with shredded cabbage, carrots, and creamy dressing.",
    image: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    isAdded: false,
    serves: 4,
    type: "Veg",
    ingredients: [
      { id: "ing28", name: "Cabbage", quantity: "1 small", serves: 4 },
      { id: "ing29", name: "Carrot", quantity: "2 medium", serves: 4 },
      { id: "ing30", name: "Mayonnaise", quantity: "3 tbsp", serves: 4 }
    ]
  },
  {
    dishId: 15,
    categoryId: 4,
    categoryName: "Sides",
    name: "Chicken Wings",
    description: "Crispy fried chicken wings tossed in spicy sauce.",
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    isAdded: false,
    serves: 3,
    type: "Non-Veg",
    ingredients: [
      { id: "ing31", name: "Chicken Wings", quantity: "500g", serves: 3 },
      { id: "ing32", name: "Flour", quantity: "1 cup", serves: 3 },
      { id: "ing33", name: "Spicy Sauce", quantity: "3 tbsp", serves: 3 }
    ]
  },

  // ⭐ Desserts
  {
    dishId: 7,
    categoryId: 3,
    categoryName: "Desserts",
    name: "Gulab Jamun",
    description: "Soft fried dough balls soaked in sugar syrup flavored with cardamom.",
    image: "https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg",
    isAdded: false,
    serves: 4,
    type: "Veg",
    ingredients: [
      { id: "ing34", name: "Khoya", quantity: "1 cup", serves: 4 },
      { id: "ing35", name: "Sugar", quantity: "1 cup", serves: 4 },
      { id: "ing36", name: "Cardamom", quantity: "1 tsp", serves: 4 }
    ]
  },
  {
    dishId: 8,
    categoryId: 3,
    categoryName: "Desserts",
    name: "Cheesecake",
    description: "Creamy cheesecake on a biscuit base topped with fruit glaze.",
    image: "https://res.cloudinary.com/dnvtpszvn/image/upload/v1758053905/download_3_g2fjtq.jpg",
    isAdded: false,
    serves: 4,
    type: "Veg",
    ingredients: [
      { id: "ing37", name: "Cream Cheese", quantity: "250g", serves: 4 },
      { id: "ing38", name: "Sugar", quantity: "1/2 cup", serves: 4 },
      { id: "ing39", name: "Biscuit Base", quantity: "1 cup", serves: 4 }
    ]
  },
  {
    dishId: 9,
    categoryId: 3,
    categoryName: "Desserts",
    name: "Chocolate Brownie",
    description: "Rich and fudgy chocolate brownie topped with nuts.",
    image: "https://res.cloudinary.com/dnvtpszvn/image/upload/v1758053904/download_4_m322x0.jpg",
    isAdded: false,
    serves: 4,
    type: "Veg",
    ingredients: [
      { id: "ing40", name: "Dark Chocolate", quantity: "200g", serves: 4 },
      { id: "ing41", name: "Flour", quantity: "1 cup", serves: 4 },
      { id: "ing42", name: "Sugar", quantity: "1 cup", serves: 4 },
      { id: "ing43", name: "Eggs", quantity: "2", serves: 4 }
    ]
  },

  // ⭐ Starters
  {
    dishId: 10,
    categoryId: 1,
    categoryName: "Starters",
    name: "Spring Rolls",
    description: "Crispy rolls filled with vegetables, served with sweet chili sauce.",
    image: "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
    isAdded: false,
    serves: 4,
    type: "Veg",
    ingredients: [
      { id: "ing44", name: "Spring Roll Sheets", quantity: "10", serves: 4 },
      { id: "ing45", name: "Cabbage", quantity: "1 cup", serves: 4 },
      { id: "ing46", name: "Carrot", quantity: "1 cup", serves: 4 }
    ]
  },
  {
    dishId: 11,
    categoryId: 1,
    categoryName: "Starters",
    name: "Chicken Tikka",
    description: "Marinated chicken pieces grilled to perfection in tandoor.",
    image: "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
    isAdded: false,
    serves: 3,
    type: "Non-Veg",
    ingredients: [
      { id: "ing47", name: "Chicken", quantity: "500g", serves: 3 },
      { id: "ing48", name: "Yogurt", quantity: "1/2 cup", serves: 3 },
      { id: "ing49", name: "Tikka Masala", quantity: "2 tbsp", serves: 3 }
    ]
  },
  {
    dishId: 12,
    categoryId: 1,
    categoryName: "Starters",
    name: "Hummus with Pita",
    description: "A Middle Eastern dip made from chickpeas, tahini, lemon, and garlic served with pita bread.",
    image: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
    isAdded: false,
    serves: 4,
    type: "Veg",
    ingredients: [
      { id: "ing50", name: "Chickpeas", quantity: "1 cup", serves: 4 },
      { id: "ing51", name: "Tahini", quantity: "2 tbsp", serves: 4 },
      { id: "ing52", name: "Garlic", quantity: "2 cloves", serves: 4 },
      { id: "ing53", name: "Pita Bread", quantity: "4 pieces", serves: 4 }
    ]
  },
  {
    dishId: 16,
    categoryId: 1,
    categoryName: "Starters",
    name: "Prawn Tempura",
    description: "Crispy deep-fried prawns served with soy dipping sauce.",
    image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    isAdded: false,
    serves: 3,
    type: "Non-Veg",
    ingredients: [
      { id: "ing54", name: "Prawns", quantity: "300g", serves: 3 },
      { id: "ing55", name: "Tempura Batter", quantity: "1 cup", serves: 3 },
      { id: "ing56", name: "Soy Sauce", quantity: "2 tbsp", serves: 3 }
    ]
  },
  {
    dishId: 17,
    categoryId: 1,
    categoryName: "Starters",
    name: "Mutton Kebab",
    description: "Spicy minced mutton skewers grilled to smoky perfection.",
    image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    isAdded: false,
    serves: 3,
    type: "Non-Veg",
    ingredients: [
      { id: "ing57", name: "Mutton Mince", quantity: "400g", serves: 3 },
      { id: "ing58", name: "Onion", quantity: "1 medium", serves: 3 },
      { id: "ing59", name: "Spices", quantity: "2 tbsp", serves: 3 }
    ]
  }
];




class Menu extends Component {
  state = { activeTabId: 1, showDetailView: false, setViewDish: null, dishCount: 0, dishes: dishes, starterCount: 0, vegDisplay: 1, nonVegDisplay: 1, mainCourseCount: 0, dessertCount: 0, sidesCount: 0, searchValue: '' }

  componentDidMount() {
    const { starterCount } = this.state
    this.setState({ dishCount: starterCount })
  }

  onChangeSearchValue = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  getSwitchCount = () => {
    const { activeTabId, starterCount, mainCourseCount, dessertCount, sidesCount } = this.state
    let count;
    switch (activeTabId) {
      case 1:
        count = starterCount
        break
      case 2:
        count = mainCourseCount
        break
      case 3:
        count = dessertCount
        break
      case 4:
        count = sidesCount
        break
      default:
        return null
    }

    this.setState({ dishCount: count })
  }

  onClickTabButton = (id) => (
    this.setState({ activeTabId: id }, this.getSwitchCount)
  )

  onChangeVegValue = (e) => {
    const newValue = parseInt(e.target.value, 10);
    this.setState({ vegDisplay: newValue, nonVegDisplay: 1 })
  }

  onChangeNonVegValue = (e) => {
    const newValue = parseInt(e.target.value, 10); // Parse the string value to an integer
    this.setState({ nonVegDisplay: newValue, vegDisplay: 1 })
  }

  onClickAddBtn = (dishId) => {
  this.setState((prevState) => {
    // Toggle isAdded
    const updatedDishes = prevState.dishes.map((each) =>
      each.dishId === dishId ? { ...each, isAdded: !each.isAdded } : each
    );

    // Recalculate counts
    const starterCount = updatedDishes.filter(
      (d) => d.categoryId === 1 && d.isAdded
    ).length;
    const mainCourseCount = updatedDishes.filter(
      (d) => d.categoryId === 2 && d.isAdded
    ).length;
    const dessertCount = updatedDishes.filter(
      (d) => d.categoryId === 3 && d.isAdded
    ).length;
    const sidesCount = updatedDishes.filter(
      (d) => d.categoryId === 4 && d.isAdded
    ).length;

    return {
      dishes: updatedDishes,
      starterCount,
      mainCourseCount,
      dessertCount,
      sidesCount,
    };
  }, this.getSwitchCount);
};


  // onClickAddBtn = (dishId) => {
  //   this.setState(prevState => ({
  //     dishes: prevState.dishes.map(each => each.dishId === dishId ? { ...each, isAdded: !each.isAdded } : each)
  //   }))
  // }

  onClickDishList = (dish) => {
    console.log(dish)
    this.setState({ showDetailView: true, setViewDish: dish })
  }

  setViewDishState = (value) => {
    this.setState({ setViewDish: value, showDetailView: false })
  }

  render() {
    const { activeTabId, setViewDish, showDetailView, searchValue, vegDisplay, nonVegDisplay, dishes, dishCount, starterCount, mainCourseCount, sidesCount, dessertCount } = this.state
    const courseName = tabsList.filter(each => each.id === activeTabId)
    const courseNameFiltered = courseName[0].tabName
    const dishesDataSearchFiltered = dishes.filter(each => searchValue === "" ? each : each.name.toLowerCase().includes(searchValue.toLowerCase()))
    const tabDishesFilter = dishesDataSearchFiltered.filter(each => each.categoryId === activeTabId)
    const vegDishesFilter = vegDisplay === 2 ? tabDishesFilter.filter(each => each.type === "Veg") : tabDishesFilter
    const nonVegDishesFilter = nonVegDisplay === 2 ? tabDishesFilter.filter(each => each.type === "Non-Veg") : tabDishesFilter
    const dishesfiltering = vegDisplay === 2 ? vegDishesFilter : nonVegDishesFilter
    // const selectedDish = dishes.find(each => each.dishId === setViewDish.dishId)


    return (
      <div className="menu-container">
        <div className="search-container">
          <button className="backbutton" type="button"><img src="https://res.cloudinary.com/dzbm1waqm/image/upload/v1757669556/Group_1000007397_h94jst.png" alt="backbutton" /></button>
          <input onChange={this.onChangeSearchValue} value={searchValue} className="input" placeholder="Search a dish for your party." />
          <button className="searchbutton" type="button"><img src="https://res.cloudinary.com/dzbm1waqm/image/upload/v1757669556/fi_711319_ymhece.png" alt="searchbutton" /></button>
        </div>
        <ul className="tabs-container">
          {tabsList.map(each => {
            const tabClassName = each.id === activeTabId ? 'active-class' : ''

            return (
              <button onClick={() => this.onClickTabButton(each.id)} type="button" key={each.id} className={`tab-item ${tabClassName}`}>{each.tabName}</button>
            )
          })}
        </ul>
        <div className="filter-container">
          <p className="main-heading">{courseNameFiltered} Selected ({dishCount})</p>
          <div className="filering-veg-non-veg-container">
            <button className="veg-btn">
              <input type="range" value={vegDisplay} onChange={this.onChangeVegValue} min={1} max={2} className="slider" id="myRange" />
            </button>

            <button className="veg-btn">
              <input type="range" value={nonVegDisplay} onChange={this.onChangeNonVegValue} min={1} max={2} className="slider-non-veg" id="myRange" />
            </button>
          </div>
        </div>

        <div className="dishes-container">
        {dishesfiltering.length >= 1 ? <>
        {dishesfiltering.map(each => {
            const isAddedOrNot = each.isAdded === false ? "Add +" : "Remove"
            const addClassName = each.isAdded === false ? 'add-to-cart' : 'remove-from-cart'

            return (
              <li key={each.dishId} className="list-item">
                <div className="dish-info">
                  <div onClick={() => this.onClickDishList(each)}>
                    <div className="dish-header-container">
                      <h1 className="dish-heading">{each.name}</h1>
                      <img className="dish-images" src={each.type === "Veg" ? "https://res.cloudinary.com/dnvtpszvn/image/upload/v1757761816/Frame_19479_dkssaf.png" : "https://res.cloudinary.com/dnvtpszvn/image/upload/v1757761816/Frame_19479_1_g3idan.png"} alt="veg-or-non-veg-img" />
                    </div>
                    <p className="dish-para">{each.description}</p>
                  </div>
                  <Link to={`/ingredients/${each.dishId}`} className="links">
                    <button type='button' className="ingredient-container">
                      <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1757972701/fi_15315413_dtsquu.png" alt="ingredient" />
                      <span className="ingredient-para">Ingredient</span>
                    </button>
                  </Link>
                </div>
                <div className="image-container">
                  <img className="main-image" src={each.image} alt={each.id} />
                  <button onClick={() => this.onClickAddBtn(each.dishId)} className={`add-btn ${addClassName}`} type="button">{isAddedOrNot}</button>
                </div>
              </li>
            )

          })}
        </> : <div className="no-dish-container">
          <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1758311853/images_yhmssi.jpg" className="no-dish-image" alt="no-dish-img" />
        <h1>Sorry, There's no dish available.</h1></div>}
        </div>
        {showDetailView === false && (
          <div className="footer-container">
            <div className="footer">
              <p className="footer-para">Total Dish Selected {starterCount + mainCourseCount + sidesCount + dessertCount}</p>
              <img className="footer-image" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1758084864/Group_1000007396_zhjvpi.png" alt="go" />
            </div>
            <button className="footer-btn" type="button">Continue</button>
          </div>
        )}

        {setViewDish && showDetailView && (
          <div className="modal-overlay" onClick={(e) => this.setViewDishState(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-box">
                <img className="view-dish-image" src={setViewDish.image} alt={setViewDish.name} />
                <div className="model-box-container">
                  <div className="dish-header-container">
                    <h1 className="dish-heading">{setViewDish.name}</h1>
                    <img className="dish-images" src={setViewDish.type === "Veg" ? "https://res.cloudinary.com/dnvtpszvn/image/upload/v1757761816/Frame_19479_dkssaf.png" : "https://res.cloudinary.com/dnvtpszvn/image/upload/v1757761816/Frame_19479_1_g3idan.png"} alt="veg-or-non-veg-img" />
                  </div>
                  <button onClick={() => this.onClickAddBtn(setViewDish.dishId)} className={`add-btn ${setViewDish.isAdded === false ? 'add-to-cart' : 'remove-from-cart'}`} type="button">{setViewDish.isAdded === false ? "Add +" : "Remove"}</button>
                </div>
                <p>
                  <strong>{setViewDish.categoryName}:</strong> {setViewDish.description}
                </p>

                <Link to={`/ingredients/${setViewDish.dishId}`} className="links">
                    <button type='button' className="ingredient-container">
                      <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1757972701/fi_15315413_dtsquu.png" alt="ingredient" />
                      <span className="ingredient-para">Ingredient</span>
                    </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

    )
  }
}

export default Menu
