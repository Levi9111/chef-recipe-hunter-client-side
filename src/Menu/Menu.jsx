import React from 'react';

const Menu = () => {
  return (
    <div className="border border-gray-300 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img
            src="https://media.istockphoto.com/id/905492462/photo/pizza-margarita-with-mozzarella-cheese-basil-and-tomato-template-for-your-design-and-menu-of.jpg?s=612x612&w=0&k=20&c=J4L7If3oJp0IrZ5IXEc-_r0WU0HNa7U5Yn4IW7ynuVo="
            alt="Pizza"
            className="w-full"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">Margherita Pizza</h2>
            <p className="text-md mt-2">
              San Marzano tomatoes, mozzarella di bufala, fresh basil
            </p>
            <p className="text-lg mt-2">$14</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201943/0046/img14l.jpg"
            alt="Pasta"
            className="w-full"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">Spaghetti Carbonara</h2>
            <p className="text-md mt-2">
              Pancetta, eggs, Parmesan cheese, black pepper
            </p>
            <p className="text-lg mt-2">$12</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201943/0046/img18l.jpg"
            alt="Lasagna"
            className="w-full"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">Classic Lasagna</h2>
            <p className="text-md mt-2">
              Layers of pasta, Bolognese sauce, mozzarella, ricotta
            </p>
            <p className="text-lg mt-2">$16</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201943/0046/img20l.jpg"
            alt="Tiramisu"
            className="w-full"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">Tiramisu</h2>
            <p className="text-md mt-2">
              Ladyfingers, espresso, mascarpone cheese, cocoa powder
            </p>
            <p className="text-lg mt-2">$8</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201943/0046/img16l.jpg"
            alt="Risotto"
            className="w-full"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">Mushroom Risotto</h2>
            <p className="text-md mt-2">
              Arborio Ladyfingers, espresso, mascarpone cheese, cocoa powder
            </p>
            <p className="text-lg mt-2">$8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
