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
