INSERT INTO images (image_id, url, product_id, main) VALUES
    ('ca84686e-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/92c952', '5c5f94eb-7e38-45e1-b7c9-57dfb7a2b93c', 1),
    ('ca846b8e-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/771796', '5c5f94eb-7e38-45e1-b7c9-57dfb7a2b93c', 0),
    ('ca846df0-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/24f355', '5c5f94eb-7e38-45e1-b7c9-57dfb7a2b93c', 0),
    ('ca846fb2-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/d32776', '5c5f94eb-7e38-45e1-b7c9-57dfb7a2b93c', 0),
        
    ('708886dc-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/f66b97', 'a3d0fa3b-8e2c-4d19-bf2a-950b8c998a58', 1),
    ('708889f2-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/56a8c2', 'a3d0fa3b-8e2c-4d19-bf2a-950b8c998a58', 0),
    ('70888b46-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/b0f7cc', 'a3d0fa3b-8e2c-4d19-bf2a-950b8c998a58', 0),
    ('70888c90-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/54176f', 'a3d0fa3b-8e2c-4d19-bf2a-950b8c998a58', 0),
    
    ('a0f2a9a6-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/51aa97', '9b4d4a1a-5224-4ad4-b4e3-053dcbfa0f3c', 1),
    ('a0f2ae9c-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/810b14', '9b4d4a1a-5224-4ad4-b4e3-053dcbfa0f3c', 0),
    ('a0f2afd2-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/1ee8a4', '9b4d4a1a-5224-4ad4-b4e3-053dcbfa0f3c', 0),
    ('a0f2b0fe-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/66b7d2', '9b4d4a1a-5224-4ad4-b4e3-053dcbfa0f3c', 0),
        
    ('c65bb9f8-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/197d29', 'efd82d85-8dd6-4979-bf5c-96933d9c2f7d', 1),
    ('c65bc984-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/61a65', 'efd82d85-8dd6-4979-bf5c-96933d9c2f7d', 0),
    ('c65bd136-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/f9cee5', 'efd82d85-8dd6-4979-bf5c-96933d9c2f7d', 0),
    ('c65bd316-e45b-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/fdf73e', 'efd82d85-8dd6-4979-bf5c-96933d9c2f7d', 0),
        
    ('2010c194-e446-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/9c184f', '6f1a6b96-6cd2-439c-a648-88b9f287f7d2', 1),
    ('2010c73e-e446-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/1fe46f', '6f1a6b96-6cd2-439c-a648-88b9f287f7d2', 0),
    ('2010c964-e446-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/56acb2', '6f1a6b96-6cd2-439c-a648-88b9f287f7d2', 0),
    ('2010cc20-e446-11ed-b5ea-0242ac120002', 'https://via.placeholder.com/150/8985dc', '6f1a6b96-6cd2-439c-a648-88b9f287f7d2', 0)

        SELECT DISTINCT p.title FROM products p
    INNER JOIN images ON p.product_id = images.product_id;