import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Nav, Tab, Form } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './ProductsSection.css';

const productsData = {
  waterfalls: [
    {
      id: 1,
      title: "أمان المسابح والنوافير (الشفاف)",
      code: "SWP 013",
      image: "/images/projects/project-4.jpeg",
      description: "منتج شفاف يحافظ على جمالية المسبح ويوفر الأمان الكامل.",
      features: [
        "يغير العمق لعمق واحد ثابت",
        "يؤمن المسبح مع الحفاظ على جماليته",
        "شفاف يختفي في الماء",
        "يتحمل أوزان الكبار والصغار",
        "يركب بدون تخريم في جدار المسبح",
        "لتنظيف المسبح ازالة الألواح العلوية فقط",
        "مصنوع من مادة الأكريليك فايبر",
        "حاصل على براءة اختراع خليجية"
      ]
    },
    {
      id: 2,
      title: "أمان سطح المسبح (متغير العمق)",
      code: "SWP 014",
      image: "/images/projects/project-5.jpeg",
      description: "نظام مرن يغير أعماق المسبح بسهولة ويوفر الأمان.",
      features: [
        "تغيير العمق لأعماق متغيرة",
        "يؤمن المسبح مع الحفاظ على جماليته",
        "سهل الفك والتركيب الجزئي",
        "يتحمل أوزان الكبار والصغار",
        "يركب بدون تخريم في جدار المسبح",
        "مصنوع من الاستانلس ستيل 316 + الأكريليك فايبر الشفاف"
      ]
    },
    {
      id: 3,
      title: "أمان سطح المسبح (الثابت)",
      code: "SWP 017",
      image: "/images/projects/project-3.jpeg",
      description: "ألواح ثابتة توفر الأمان وتحافظ على شكل المسبح.",
      features: [
        "ألواح تثبت على جدار المسبح من الأعلى لإغلاقه",
        "يؤمن المسبح مع الحفاظ على جماليته",
        "سهل الفك والتركيب",
        "يتحمل أوزان الكبار والصغار",
        "يركب بدون تخريم في جدار المسبح",
        "مصنوع من الاستانلس ستيل 316 + الأكريليك فايبر الشفاف"
      ]
    },
  ],
  covers: [
    {
      id: 4,
      title: "غطاء المسبح المتحرك (نفس المستوى)",
      code: "SWP 015",
      image: "/images/projects/project-2.jpeg",
      description: "غطاء متحرك يضيف مساحة جديدة فوق المسبح.",
      features: [
        "غطاء متحرك على مستوى المسبح",
        "مغطى بخامة WBC بديل الخشب ذات ألوان جذابة",
        "يؤمن المسبح ويخلق مكان إضافي فوقه",
        "سهل الاستخدام",
        "يتحمل أوزان الكبار والصغار",
        "مصنوع من الاستانلس ستيل أو الألومنيوم (حسب الطلب)"
      ]
    },
    {
      id: 5,
      title: "غطاء المسبح المتحرك (فوق المستوى)",
      code: "UPS 016",
      image: "/images/projects/project-6.jpeg",
      description: "غطاء مرتفع يحافظ على المسبح آمن للأطفال.",
      features: [
        "غطاء متحرك مرتفع فوق مستوى المسبح",
        "مغطى بخامة VBC بألوان متنوعة",
        "يؤمن المسبح عن الأطفال",
        "سهل الاستخدام",
        "مصنوع من الاستانلس ستيل أو الألومنيوم (حسب الطلب)"
      ]
    },
    {
      id: 6,
      title: "غطاء المسبح الثابت BVC",
      code: "PVC 012",
      image: "/images/projects/project-11.jpeg",
      description: "غطاء ثابت متين يحافظ على أمان الأطفال.",
      features: [
        "غطاء من BVC مثبت بمسامير بحواف المسبح",
        "يؤمن المسبح عن الأطفال",
        "سهل الفك والتركيب",
        "مصنوع من خامة BVC"
      ]
    },
    {
  id: 7,
  title: "غطاء المسبح شبك",
  code: "PVC 011",
  image: "/images/projects/project-10.jpeg", // غيري الصورة لو عندك لينك تاني
  description: "غطاء شبك متين يحافظ على أمان الأطفال.",
  features: [
    "غطاء شبك مثبت بمسامير بحواف المسبح",
    "المنتج مقاوم للرطوبة والشمس",
    "يؤمن المسبح عن الأطفال",
    "سهل الفك والتركيب"
  ]
}

  ],
  barriers: [
    
    {
      id: 9,
      title: "منتج حاجز الأمان",
      code: "SWW 01",
      image: "/images/projects/project-1.jpeg",
      description: "حاجز ثابت يوفر الأمان للأطفال داخل المسبح.",
      features: [
        "حاجز فاصل بين العمق العالي والمنخفض",
        "منتج ثابت في المسبح",
        "يحافظ على جمالية المسبح",
        "مصنوع من الاستانلس ستيل 316 + الأكريليك فايبر"
      ]
    },
  ],
  accessories: [
    {
      id: 10,
      title: "مجرى الأوفر فلو",
      code: "OFL 02",
      image: "/images/projects/project-7.jpeg",
      description: "إضافة جمالية ووظائفية لمجرى المياه.",
      features: [
        "مصنوع من الاستانلس ستيل 316 المقاوم للصدأ",
        "يضيف جمالية للمجرى",
        "يفصل حسب الطلب"
      ]
    },
    
    
  ],
  
};

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState('waterfalls');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section id="products" ref={sectionRef} className="products-section">
      <Container>
        <h2 className="section-title text-center">منتجاتنا</h2>
                      <div className="title-underline"></div>
        
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          {/* ✅ Nav Pills في الشاشات الكبيرة */}
      <div className="d-none d-md-flex justify-content-center mb-4 product-tabs">
        <Nav variant="pills" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav.Item>
            <Nav.Link eventKey="waterfalls" className="product-tab">أنظمة الأمان</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="covers" className="product-tab">أغطية المسابح</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="barriers" className="product-tab">الحواجز</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="accessories" className="product-tab">إكسسوارات</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* ✅ Dropdown في الشاشات الصغيرة */}
      <div className="d-md-none mb-4">
        <Form.Select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="waterfalls">أنظمة الأمان</option>
          <option value="covers">أغطية المسابح</option>
          <option value="barriers">الحواجز</option>
          <option value="accessories">إكسسوارات</option>
        </Form.Select>
      </div>


          <Tab.Content>
            {Object.keys(productsData).map((key) => (
              <Tab.Pane key={key} eventKey={key}>
                <Row>
  {productsData[key].map((product, index) => (
    <Col
      key={product.id}
      md={4}
      className={`fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: isVisible ? `${index * 0.2}s` : "0s" }}
    >
      <ProductCard {...product} />
    </Col>
  ))}
</Row>

              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default ProductsSection;
