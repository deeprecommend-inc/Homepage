import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BlochSphere = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas });

        const fov = 75;
        const aspect = canvas.clientWidth / canvas.clientHeight;
        const near = 0.1;
        const far = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 5;

        const scene = new THREE.Scene();

        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        const axesHelper = new THREE.AxesHelper(3);
        scene.add(axesHelper);

        function render() {
            renderer.render(scene, camera);
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        animate();
    }, []);

    return <canvas ref={canvasRef} />;
};

export default BlochSphere;
