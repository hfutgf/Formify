/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operation with users
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a single user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Successfully retrieved the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 fullName:
 *                   type: string
 *                   example: "Jasurbek Mansuralieyv"
 *                 email:
 *                   type: string
 *                   example: "jasurbek@gmail.com"
 *                 password:
 *                   type: string
 *                   example: "$argon2id$v=19$m=65536,t=3,p=4$xb76DlZWNUdqZ4PKdFSPww$tVFJ/wWsQAeo0OaIe5A0TORuW3UFckgoLunPUQS7F3M"
 *                 role:
 *                   type: string
 *                   example: "USER"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-14T23:09:02.403"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "John Blind"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Successfully updated the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 fullName:
 *                   type: string
 *                   example: "Jasurbek Mansuraliyev"
 *                 email:
 *                   type: string
 *                   example: "jasurbek@gmail.com"
 *                 password:
 *                   type: string
 *                   example: "$argon2id$v=19$m=65536,t=3,p=4$xb76DlZWNUdqZ4PKdFSPww$tVFJ/wWsQAeo0OaIe5A0TORuW3UFckgoLunPUQS7F3M"
 *                 role:
 *                   type: string
 *                   example: "USER"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-14T23:09:02.403"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: "2024-10-18T17:08:12.145"
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid input data
 */

/**
 * @swagger
 * /api/users/all/{adminId}:
 *   get:
 *     summary: Get all users (admin access required)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: adminId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the admin user
 *     responses:
 *       200:
 *         description: A list of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   fullName:
 *                     type: string
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     example: "john.doe@example.com"
 *                   role:
 *                     type: string
 *                     example: "USER"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-20T17:08:12.145Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-20T17:08:12.145Z"
 *       401:
 *         description: Unauthorized, admin access required
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/users/role/{adminId}:
 *   get:
 *     summary: Get users by role (admin access required)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: adminId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the admin user
 *       - in: query
 *         name: role
 *         required: true
 *         schema:
 *           type: string
 *         description: Role to filter users by (e.g., "USER", "ADMIN")
 *         example: "USER"
 *     responses:
 *       200:
 *         description: A list of users with the specified role
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   fullName:
 *                     type: string
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     example: "john.doe@example.com"
 *                   role:
 *                     type: string
 *                     example: "USER"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-20T17:08:12.145Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-20T17:08:12.145Z"
 *       401:
 *         description: Unauthorized, admin access required
 *       404:
 *         description: Admin not found or no users with the specified role
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/users/{adminId}/{userId}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: adminId
 *         required: true
 *         description: ID of the admin making the request
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Successfully deleted the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 fullName:
 *                   type: string
 *                   example: "Jasurbek Mansuralieyv"
 *                 email:
 *                   type: string
 *                   example: "jasurbek@gmail.com"
 *                 password:
 *                   type: string
 *                   example: "$argon2id$v=19$m=65536,t=3,p=4$xb76DlZWNUdqZ4PKdFSPww$tVFJ/wWsQAeo0OaIe5A0TORuW3UFckgoLunPUQS7F3M"
 *                 role:
 *                   type: string
 *                   example: "USER"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-14T23:09:02.403"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: User not found
 *       403:
 *         description: Forbidden, admin does not have permission to delete this user
 */

/**
 * @swagger
 * /api/users/{adminId}/{userId}:
 *   put:
 *     summary: Update a user's status and role by user ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: adminId
 *         required: true
 *         description: ID of the admin making the request
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: integer
 *           example: 2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [ACTIVE, BLOCK]
 *                 example: "ACTIVE"
 *               role:
 *                 type: string
 *                 enum: [USER, ADMIN]
 *                 example: "USER"
 *     responses:
 *       200:
 *         description: Successfully updated the user's status and role
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 fullName:
 *                   type: string
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   example: "johndoe@example.com"
 *                 status:
 *                   type: string
 *                   enum: [ACTIVE, BLOCK]
 *                   example: "ACTIVE"
 *                 role:
 *                   type: string
 *                   enum: [USER, ADMIN]
 *                   example: "USER"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-14T23:09:02.403"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: "2024-10-18T17:08:12.145"
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid input data
 */
