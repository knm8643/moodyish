import { useState } from "react";

function PopUp({ isOpen, closeModal, content, type }) {
    const [viewType, setViewType] = useState(type);
    const [selectedFood, setSelectedFood] = useState(null);

    if (!isOpen || !content) return null;

    const formatAvailability = (availability) => {
        return availability.map(({ month, startDay, endDay }) =>
            `${month}월 ${startDay}일~${endDay}일`
        ).join('\n');
    };

    const handleFoodClick = (food) => {
        setSelectedFood(food);
        setViewType("detail");
    };

    return (
        <div className={`food-detail-modal ${isOpen ? 'show' : ''}`}>
            <div className="modal-content">
                <button className="modal-close" onClick={closeModal}>×</button>
                <div className="modal-body">
                    {/* 단일 상세 보기 */}
                    {(viewType === "detail" || type === "detail") && (
                        <div className="food-detail">
                            <div className="modal-food-icon">{(selectedFood || content).icon}</div>
                            <div className="modal-food-name">{(selectedFood || content).name}</div>
                            <div className="modal-food-season">{(selectedFood || content).season}</div>
                            <div className="modal-food-description">{(selectedFood || content).description}</div>
                            <div className="modal-availability">
                                <strong>맛있는 시기 </strong><br/> {formatAvailability((selectedFood || content).availability)}
                            </div>
                        </div>
                    )}

                    {/* 목록 보기 */}
                    {(viewType === "list" || type === "list") && (
                        <div className="food-list">
                            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>이 날의 제철 음식</div>
                                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{content.date}</div>
                            </div>
                            {content.foods.map((food, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 0',
                                        borderBottom: '1px solid var(--neutral-200)',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleFoodClick(food)}
                                >
                                    <div style={{ fontSize: '24px', marginRight: '16px' }}>{food.icon}</div>
                                    <div>
                                        <div style={{ fontWeight: '500', marginBottom: '4px' }}>{food.name}</div>
                                        <div style={{ fontSize: '12px', color: 'var(--primary)' }}>{food.season}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PopUp;