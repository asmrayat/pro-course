import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./AllCourse.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="cHome mt-5">
            <div className="container px-4">
                <h1 className="text-white">Latest Course</h1>
                <div class="row gx-5">
                    {
                        service.map(service => <ServiceCard
                            key={service.key}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>

        </div>
    );
};
export default Service;