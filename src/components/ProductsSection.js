import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import './ProductsSection.css';
import ProductCard from './ProductCard';

const waterfallProducts = [
  {
    id: 1,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 2,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 3,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 4,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 5,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 6,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 7,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 8,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
    {
    id: 9,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 10,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 11,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 12,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  }
];

const fountainProducts = [
  {
    id: 1,
    title: "نافورة مياه تفاعلية",
    description: "نافورة مياه تفاعلية مع إضاءة LED متطورة، تخلق تجربة بصرية مذهلة",
    image: "https://cdn.salla.sa/KrDbg/bea1ada5-55a5-4dcc-8c20-8e085fd70000-500x353.52815395581-hL1Y6cJf5QkR4rSGTu63HhiekE3vuOXrFKNxpO71.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/7f698a90-e511-4fa7-b6f9-3b02f09585fb-500x353.4375-cAu11CrilO325bJsCh5GE1kdurdN9R0sFhv08uif.jpg",
    features: ["إضاءة LED", "تحكم ذكي", "توفير الطاقة"]
  },
  {
    id: 2,
    title: "نافورة مياه داخلية",
    description: "نوافير مياه صغيرة الحجم مناسبة للمنازل والمكاتب، تضيف لمسة جمالية راقية",
    image: "https://cdn.salla.sa/KrDbg/01d89167-d9f4-4bef-b587-3c8841fa65d3-500x353.52815395581-23AOJcuuY392PTMpzDSWezJo3qh4L3pzZODaoMXq.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/30e4925b-b182-492c-8ab5-10bbfa84c1d8-500x353.4375-FyFpw7126zxhL2Pv41yaUXoOfnFjwcaM4lMiUibN.jpg",
    features: ["حجم صغير", "تصميم أنيق", "سهولة الصيانة"]
  },
  {
    id: 3,
    title: "نافورة مياه تفاعلية",
    description: "نافورة مياه تفاعلية مع إضاءة LED متطورة، تخلق تجربة بصرية مذهلة",
    image: "https://cdn.salla.sa/KrDbg/bea1ada5-55a5-4dcc-8c20-8e085fd70000-500x353.52815395581-hL1Y6cJf5QkR4rSGTu63HhiekE3vuOXrFKNxpO71.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/7f698a90-e511-4fa7-b6f9-3b02f09585fb-500x353.4375-cAu11CrilO325bJsCh5GE1kdurdN9R0sFhv08uif.jpg",
    features: ["إضاءة LED", "تحكم ذكي", "توفير الطاقة"]
  },
  {
    id: 4,
    title: "نافورة مياه داخلية",
    description: "نوافير مياه صغيرة الحجم مناسبة للمنازل والمكاتب، تضيف لمسة جمالية راقية",
    image: "https://cdn.salla.sa/KrDbg/01d89167-d9f4-4bef-b587-3c8841fa65d3-500x353.52815395581-23AOJcuuY392PTMpzDSWezJo3qh4L3pzZODaoMXq.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/30e4925b-b182-492c-8ab5-10bbfa84c1d8-500x353.4375-FyFpw7126zxhL2Pv41yaUXoOfnFjwcaM4lMiUibN.jpg",
    features: ["حجم صغير", "تصميم أنيق", "سهولة الصيانة"]
  },
  {
    id: 5,
    title: "نافورة مياه تفاعلية",
    description: "نافورة مياه تفاعلية مع إضاءة LED متطورة، تخلق تجربة بصرية مذهلة",
    image: "https://cdn.salla.sa/KrDbg/bea1ada5-55a5-4dcc-8c20-8e085fd70000-500x353.52815395581-hL1Y6cJf5QkR4rSGTu63HhiekE3vuOXrFKNxpO71.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/7f698a90-e511-4fa7-b6f9-3b02f09585fb-500x353.4375-cAu11CrilO325bJsCh5GE1kdurdN9R0sFhv08uif.jpg",
    features: ["إضاءة LED", "تحكم ذكي", "توفير الطاقة"]
  },
  {
    id: 6,
    title: "نافورة مياه داخلية",
    description: "نوافير مياه صغيرة الحجم مناسبة للمنازل والمكاتب، تضيف لمسة جمالية راقية",
    image: "https://cdn.salla.sa/KrDbg/01d89167-d9f4-4bef-b587-3c8841fa65d3-500x353.52815395581-23AOJcuuY392PTMpzDSWezJo3qh4L3pzZODaoMXq.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/30e4925b-b182-492c-8ab5-10bbfa84c1d8-500x353.4375-FyFpw7126zxhL2Pv41yaUXoOfnFjwcaM4lMiUibN.jpg",
    features: ["حجم صغير", "تصميم أنيق", "سهولة الصيانة"]
  },
  {
    id: 7,
    title: "نافورة مياه تفاعلية",
    description: "نافورة مياه تفاعلية مع إضاءة LED متطورة، تخلق تجربة بصرية مذهلة",
    image: "https://cdn.salla.sa/KrDbg/bea1ada5-55a5-4dcc-8c20-8e085fd70000-500x353.52815395581-hL1Y6cJf5QkR4rSGTu63HhiekE3vuOXrFKNxpO71.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/7f698a90-e511-4fa7-b6f9-3b02f09585fb-500x353.4375-cAu11CrilO325bJsCh5GE1kdurdN9R0sFhv08uif.jpg",
    features: ["إضاءة LED", "تحكم ذكي", "توفير الطاقة"]
  },
  {
    id: 8,
    title: "نافورة مياه داخلية",
    description: "نوافير مياه صغيرة الحجم مناسبة للمنازل والمكاتب، تضيف لمسة جمالية راقية",
    image: "https://cdn.salla.sa/KrDbg/01d89167-d9f4-4bef-b587-3c8841fa65d3-500x353.52815395581-23AOJcuuY392PTMpzDSWezJo3qh4L3pzZODaoMXq.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/30e4925b-b182-492c-8ab5-10bbfa84c1d8-500x353.4375-FyFpw7126zxhL2Pv41yaUXoOfnFjwcaM4lMiUibN.jpg",
    features: ["حجم صغير", "تصميم أنيق", "سهولة الصيانة"]
  },
];

const safetyProducts = [
  {
    id: 1,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 2,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 3,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 4,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 5,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 6,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 7,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 8,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
    {
    id: 9,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 10,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 11,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 12,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  }
];
const coverProducts = [
  {
    id: 1,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 2,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 3,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 4,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 5,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 6,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 7,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 8,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
    {
    id: 9,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 10,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 11,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 12,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  }
];
const barrierProducts = [
  {
    id: 1,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 2,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 3,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 4,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 5,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 6,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 7,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 8,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
    {
    id: 9,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 10,
    title: "شلالات الحجر الطبيعي",
    description: "شلالات مصنوعة من الحجر الطبيعي بأشكال عضوية طبيعية، تناسب الحدائق والمساحات الخارجية",
    image: "https://cdn.salla.sa/KrDbg/d966a233-971a-4c42-9488-39f2ec119e64-500x353.52815395581-MMgLUnRUkJatMSJ2Xn9H1S9IR5oGnRIH776H2m6D.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/704b4b1c-541f-42b0-80e0-3b315ee4d4e7-1000x516.33568225496-omFrt6W1SnP74qinMnKfs2ajCTw0Uk8gZU9a5A5N.jpg",
    features: ["حجر طبيعي", "مقاوم للعوامل الجوية", "تصميم عضوي"]
  },
  {
    id: 11,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  },
  {
    id: 12,
    title: "شلالات الحائط الحديثة",
    description: "تصميمات مبتكرة لشلالات الحائط بأشكال هندسية متنوعة، مناسبة للمسابح المنزلية والتجارية",
    image: "https://cdn.salla.sa/KrDbg/4c1e4412-ec7d-4a8c-8275-10e835d6ecaf-500x353.52815395581-Zwl5OIxK2iTzytH37j3lO9NKCGFoatIxiOTR2i8c.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/40f4186e-5d92-4f51-93f0-57e0b4d96617-500x353.52815395581-OCOveRLe1aYV7r83CRtP1ZltImh40XKJ1BuZCvlo.jpg",
    features: ["تصميم عصري", "مواد عالية الجودة", "سهولة التركيب"]
  }
];
const accessoriesProducts = [
    {
    id: 1,
    title: "نافورة مياه تفاعلية",
    description: "نافورة مياه تفاعلية مع إضاءة LED متطورة، تخلق تجربة بصرية مذهلة",
    image: "https://cdn.salla.sa/KrDbg/bea1ada5-55a5-4dcc-8c20-8e085fd70000-500x353.52815395581-hL1Y6cJf5QkR4rSGTu63HhiekE3vuOXrFKNxpO71.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/7f698a90-e511-4fa7-b6f9-3b02f09585fb-500x353.4375-cAu11CrilO325bJsCh5GE1kdurdN9R0sFhv08uif.jpg",
    features: ["إضاءة LED", "تحكم ذكي", "توفير الطاقة"]
  },
  {
    id: 2,
    title: "نافورة مياه داخلية",
    description: "نوافير مياه صغيرة الحجم مناسبة للمنازل والمكاتب، تضيف لمسة جمالية راقية",
    image: "https://cdn.salla.sa/KrDbg/01d89167-d9f4-4bef-b587-3c8841fa65d3-500x353.52815395581-23AOJcuuY392PTMpzDSWezJo3qh4L3pzZODaoMXq.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/30e4925b-b182-492c-8ab5-10bbfa84c1d8-500x353.4375-FyFpw7126zxhL2Pv41yaUXoOfnFjwcaM4lMiUibN.jpg",
    features: ["حجم صغير", "تصميم أنيق", "سهولة الصيانة"]
  },
  {
    id: 3,
    title: "نافورة مياه تفاعلية",
    description: "نافورة مياه تفاعلية مع إضاءة LED متطورة، تخلق تجربة بصرية مذهلة",
    image: "https://cdn.salla.sa/KrDbg/bea1ada5-55a5-4dcc-8c20-8e085fd70000-500x353.52815395581-hL1Y6cJf5QkR4rSGTu63HhiekE3vuOXrFKNxpO71.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/7f698a90-e511-4fa7-b6f9-3b02f09585fb-500x353.4375-cAu11CrilO325bJsCh5GE1kdurdN9R0sFhv08uif.jpg",
    features: ["إضاءة LED", "تحكم ذكي", "توفير الطاقة"]
  },
  {
    id: 4,
    title: "نافورة مياه داخلية",
    description: "نوافير مياه صغيرة الحجم مناسبة للمنازل والمكاتب، تضيف لمسة جمالية راقية",
    image: "https://cdn.salla.sa/KrDbg/01d89167-d9f4-4bef-b587-3c8841fa65d3-500x353.52815395581-23AOJcuuY392PTMpzDSWezJo3qh4L3pzZODaoMXq.jpg",
    hoverImage: "https://cdn.salla.sa/KrDbg/30e4925b-b182-492c-8ab5-10bbfa84c1d8-500x353.4375-FyFpw7126zxhL2Pv41yaUXoOfnFjwcaM4lMiUibN.jpg",
    features: ["حجم صغير", "تصميم أنيق", "سهولة الصيانة"]
  },
];


const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState('waterfalls');

  return (
    <section id="products" className="products-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="section-header mb-5">
              <h2 className="section-title">منتجاتنا</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">
                نقدم مجموعة واسعة من المنتجات عالية الجودة لجميع احتياجاتك المائية
              </p>
            </div>
          </Col>
        </Row>

        <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <Nav variant="pills" className="justify-content-center product-tabs">
                <Nav.Item>
                  <Nav.Link eventKey="waterfalls" className="product-tab">
                    شلالات
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fountains" className="product-tab">
                    نوافير
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="safety" className="product-tab">
                    امان المسابح
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="covers" className="product-tab">
                    اغطية المسابح
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="barriers" className="product-tab">
                    حواجز المسابح
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="accessories" className="product-tab">
                    اكسسوارات
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          <Tab.Content>
            <Tab.Pane eventKey="waterfalls">
              <Row>
                {waterfallProducts.map((product) => (
                  <Col lg={6} xl={3} key={product.id} className="mb-4">
                    <ProductCard 
                      title={product.title}
                      description={product.description}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      features={product.features}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="fountains">
              <Row>
                {fountainProducts.map((product) => (
                  <Col lg={6} xl={3} key={product.id} className="mb-4">
                    <ProductCard 
                      title={product.title}
                      description={product.description}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      features={product.features}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="safety">
              <Row>
                {safetyProducts.map((product) => (
                  <Col lg={6} xl={3} key={product.id} className="mb-4">
                    <ProductCard 
                      title={product.title}
                      description={product.description}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      features={product.features}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="covers">
              <Row>
                {coverProducts.map((product) => (
                  <Col lg={6} xl={3} key={product.id} className="mb-4">
                    <ProductCard 
                      title={product.title}
                      description={product.description}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      features={product.features}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="barriers">
              <Row>
                {barrierProducts.map((product) => (
                  <Col lg={6} xl={3} key={product.id} className="mb-4">
                    <ProductCard 
                      title={product.title}
                      description={product.description}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      features={product.features}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            
            <Tab.Pane eventKey="accessories">
              <Row>
                {accessoriesProducts.map((product) => (
                  <Col lg={6} xl={3} key={product.id} className="mb-4">
                    <ProductCard 
                      title={product.title}
                      description={product.description}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      features={product.features}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default ProductsSection;
