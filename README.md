# Tangas-Ecommerce

# Extructura de la base

  `id` int(11) NOT NULL,

  `name` varchar(255) DEFAULT NULL,

  `price` decimal(10,2) NOT NULL,

  `quantity` int(11) NOT NULL,

  `image` varchar(255) DEFAULT NULL,

  `url` varchar(255) DEFAULT NULL,

  `createdAt` datetime NOT NULL,

  `updatedAt` datetime NOT NULL


  `id` int(11) NOT NULL,

  `name` varchar(255) CHARACTER SET latin1 DEFAULT NULL,

  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,

  `password` varchar(255) DEFAULT NULL,

  `image` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,

  `url` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,

  `createdAt` datetime NOT NULL,
  
  `updatedAt` datetime NOT NULL