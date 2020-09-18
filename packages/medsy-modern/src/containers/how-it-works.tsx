import React from 'react';
import FeatureBlock from 'components/feature-block';

const data = [
  {
    id: 1,
    background: '#feeec8',
    title: 'Воспользуйтесь поиском лекарств.',
    description: 'Воспользуйтесь удобным поиском, для подбора нужных лекарств',
  },
  {
    id: 2,
    background: '#ceeffe',
    title: 'Добавьте препараты в корзину.',
    description:
      'Соберите в корзину нужные вам медикаменты',
  },
  {
    id: 3,
    background: '#d4f8c4',
    title: 'Оформите ваш заказ в три клика.',
    description: 'Укажите ваши контакты и адрес доставки',
  },
  {
    id: 4,
    background: '#d8dafe',
    title: 'Оплатите ваш заказ, после доставки.',
    description:
      'Оплатите курьеру за ваш заказ, удобным для вас способом',
  },
];

export default function HowItWorks() {
  return (
    <div className="flex w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white">
      <div className="feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px">
        {data.map((item, index) => (
          <FeatureBlock
            key={item.id}
            title={item.title}
            description={item.description}
            counterBg={item.background}
            counter={index + 1}
            className="feature-block"
          />
        ))}
      </div>
    </div>
  );
}
