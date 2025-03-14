import { CircleArrowRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface CustomerLogoProps {
    name: string;
    logo: string;
    delay: number;
}

interface StatItemProps {
    value: string;
    label: string;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
};

const CustomerLogo: React.FC<CustomerLogoProps> = ({ name, logo, delay }) => (
    <motion.div
        variants={fadeInUp}
        className="flex items-center justify-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
        <motion.img
            src={logo}
            alt={`${name} uses our inventory management system`}
            className="h-12 max-w-full object-contain"
            whileHover={{ scale: 1.1, opacity: 1 }}
            initial={{ opacity: 0.7, filter: 'grayscale(100%)' }}
            animate={{ opacity: 1, filter: 'grayscale(0%)', transition: { delay: delay / 1000 } }}
        />
    </motion.div>
);

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
    const [displayValue, setDisplayValue] = useState('0');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            if (!isNaN(numericValue)) {
                let start = 0;
                const duration = Math.random() * 2000 + 1000;
                const startTime = Date.now();

                const updateValue = () => {
                    const elapsed = Date.now() - startTime;
                    if (elapsed < duration) {
                        const progress = elapsed / duration;
                        const current = Math.floor(progress * numericValue);
                        setDisplayValue(value.replace(/[0-9.]+/, current.toString()));
                        requestAnimationFrame(updateValue);
                    } else {
                        setDisplayValue(value);
                    }
                };

                requestAnimationFrame(updateValue);
            } else {
                setDisplayValue(value);
            }
        }
    }, [isInView, value]);

    return (
        <motion.div ref={ref} variants={fadeInUp} className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{displayValue}</div>
            <div className="text-gray-600">{label}</div>
        </motion.div>
    );
};

const customers = [
    { name: 'Nike', logo: 'https://loodibee.com/wp-content/uploads/Nike-Logo.png' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg' },
    { name: 'Coca Cola', logo: 'https://cdn.worldvectorlogo.com/logos/coca-cola-4.svg' },
    { name: 'Dell', logo: 'https://cdn.worldvectorlogo.com/logos/dell-2.svg' },
    { name: 'FedEx', logo: 'https://cdn.worldvectorlogo.com/logos/fedex-express-6.svg' },
    { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28Red%29.svg/1024px-Toyota_logo_%28Red%29.svg.png' },
];

const stats = [
    { value: '5,000+', label: 'Active Users' },
    { value: '$2.5B+', label: 'Inventory Managed' },
    { value: '99.9%', label: 'System Uptime' },
];

const CustomerSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div variants={fadeInUp} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join thousands of businesses that rely on our inventory management system to scale their operations
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat) => (
                        <StatItem key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    {customers.map((customer, index) => (
                        <CustomerLogo key={customer.name} name={customer.name} logo={customer.logo} delay={index * 100} />
                    ))}
                </div>

                <motion.div variants={fadeInUp} className="flex justify-center">
                    <motion.button whileHover={{ scale: 1.05, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)' }} className="group inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all duration-300 hover:bg-primary/90">
                        <div>Start Free Trial</div>
                        <CircleArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CustomerSection;
