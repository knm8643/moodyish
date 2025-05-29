import { useEffect, useState } from 'react';
import { seasonalFoods } from '../data';

function AllFoods({ currentMonth, openModal }) {
    const [foods, setFoods] = useState([]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);

        const timer = setTimeout(() => {
            const monthFoods = seasonalFoods.filter(food =>
                food.availability.some(period => period.month === (currentMonth+1))
            );
            setFoods(monthFoods);
            setIsTransitioning(false);
        }, 150);

        return () => clearTimeout(timer);
    }, [currentMonth]);

    return (
        <div className={`upcoming-section ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="upcoming-header">In Season</div>
            <div id="seasonalFoodsList">
                {foods.length === 0 && !isTransitioning ? (
                    <div className="no-foods">
                        <div className="no-foods-icon">🌱</div>
                        <div className="no-foods-text">
                            이번 달은 특별히 추천할 제철 음식이 적습니다.<br/>
                            곧 다가올 제철 재료를 미리 만나보세요!
                        </div>
                    </div>
                ) : (
                    foods.map((food, index) => (
                        <div
                            key={food.id}
                            className="food-item fade-in show"
                            style={{ transitionDelay: `${index * 200}ms` }}
                            onClick={() => openModal(food, 'detail')}
                        >
                            <div className="food-number">{index + 1}</div>
                            <div className="food-info">
                                <div className="food-name">{food.name}</div>
                                <div className="food-season">{food.season}</div>
                            </div>
                            <div className="food-icon-display">{food.icon}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AllFoods;