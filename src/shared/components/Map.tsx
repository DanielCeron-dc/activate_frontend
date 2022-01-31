import React, { CSSProperties, useEffect, useRef } from 'react';


interface MapProps {
    center?: google.maps.LatLngLiteral;
    zoom?: number;
    style?: CSSProperties;
    className?: string;
};

const Map: React.FC<MapProps> = ({ center = { lat: 30, lng: -110 }, zoom = 8, style , className}) => {

    const refMap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refMap.current) return;
        if (google === undefined) return; 

        const map: google.maps.Map = new google.maps.Map(refMap.current, {
            center,
            zoom
        });

        new google.maps.Marker({ position: center, map });
    }, [])

    return <div ref={refMap} style={style} className={className}/>
}
export default Map;