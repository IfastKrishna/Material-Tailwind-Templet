const routes = [
  {
    name: "dashboard",
    path: "/dashboard",
    iconsName: "dashboard",
    childrens: [
      {
        name: "products",
        path: "/products",
        iconsName: "products",
        childrens: [
          {
            name: "product",
            path: "/products/:id",
            iconsName: "product",
            childrens: [
              { name: "edit", path: "/products/:id/edit", iconsName: "edit" },
              {
                name: "delete",
                path: "/products/:id/delete",
                iconsName: "delete",
              },
            ],
          },
          { name: "create", path: "/products/create", iconsName: "create" },
        ],
      },
    ],
  },
  {
    name: "users",
    path: "/users",
    iconsName: "users",
    childrens: [
      {
        name: "user",
        path: "/users/:id",
        iconsName: "user",
        childrens: [
          {
            name: "edit",
            path: "/users/:id/edit",
            iconsName: "edit",
          },
          {
            name: "delete",
            path: "/users/:id/delete",
            iconsName: "delete",
          },
        ],
      },
      { name: "create", path: "/users/create", iconsName: "create" },
    ],
  },
  {
    name: "categories",
    path: "/categories",
    iconsName: "categories",
    childrens: [
      {
        name: "category",
        path: "/categories/:id",
        iconsName: "category",
        childrens: [
          {
            name: "edit",
            path: "/categories/:id/edit",
            iconsName: "edit",
          },
          {
            name: "delete",
            path: "/categories/:id/delete",
            iconsName: "delete",
          },
        ],
      },
      { name: "create", path: "/categories/create", iconsName: "create" },
    ],
  },
];
