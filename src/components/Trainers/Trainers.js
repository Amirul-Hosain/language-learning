import React from 'react';

const Trainers = () => {
    return (
        <div>
            <h2 style={{ marginLeft: '130px', marginTop: '20px' }}>Our Trainers</h2>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div style={{ display: 'flex', margin: '15px 10px' }}>
                    <div>
                        <img height='120' width='120' src="./images/trainer-1.jpg" alt="" />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <h4>Name: John Snow</h4>
                        <p>About: I am Spanis Language Coach.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '15px 10px' }}>
                    <div>
                        <img height='120' width='120' src="/images/trainer-2.jpg" alt="" />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <h4>Name: Roni Mahmood</h4>
                        <p>About: I am Chinis Language Coach.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '15px 10px' }}>
                    <div>
                        <img height='120' width='120' src="/images/trainer-3.jpg" alt="" />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <h4>Name: Rakib Ahmed</h4>
                        <p>About: I am Jermany Language Coach.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '15px 10px' }}>
                    <div>
                        <img height='120' width='120' src="/images/trainer-4.jpg" alt="" />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <h4>Name: Arafat Nafi</h4>
                        <p>About: I am Arabic Language Coach.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '15px 10px' }}>
                    <div>
                        <img height='120' width='120' src="/images/trainer-5.jpg" alt="" />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <h4>Name: Amirul Hosain</h4>
                        <p>About: I am Japanis Language Coach.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '15px 10px' }}>
                    <div>
                        <img height='120' width='120' src="/images/trainer-6.jpg" alt="" />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <h4>Name: Riajul Islam</h4>
                        <p>About: I am Farsi Language Coach.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainers;