/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Operation with auth
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registration user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: example@gmail.com
 *               fullName:
 *                 type: string
 *                 example: John Blind
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Successfully request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 5
 *                     fullName:
 *                       type: string
 *                       example: John Blind
 *                     email:
 *                       type: string
 *                       example: example@gmail.com
 *                     role:
 *                       type: string
 *                       example: USER
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-10-18T16:53:14.398"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       nullable: true
 *                       example: null
 *                 accessToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzI5MjcwMzk0LCJleHAiOjE3MjkzNTY3OTR9.0QSxH_kL9ZaZc_wrpBJhG1Jk5IUgA-rByJ9HMVRsHLY"
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@gmail.com
 *               password:
 *                 type: string
 *                 example: test1234
 *     responses:
 *       200:
 *         description: Успешная регистрация
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 5
 *                     fullName:
 *                       type: string
 *                       example: John Blind
 *                     email:
 *                       type: string
 *                       example: example@gmail.com
 *                     role:
 *                       type: string
 *                       example: USER
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-10-18T16:53:14.398"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       nullable: true
 *                       example: null
 *                 accessToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzI5MjcwMzk0LCJleHAiOjE3MjkzNTY3OTR9.0QSxH_kL9ZaZc_wrpBJhG1Jk5IUgA-rByJ9HMVRsHLY"
 */

/**
 * @swagger
 * /api/auth/get-access-token:
 *   post:
 *     summary: Get access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzI5MjY5NzAyLCJleHAiOjE3Mjk4NzQ1MDJ9.AgDAq2rsyD_6i6AjMp3MY02P_l38pWHVn5ehPumoxPA
 *     responses:
 *       200:
 *         description: Successfully registration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzI5MjcwMzk0LCJleHAiOjE3MjkzNTY3OTR9.0QSxH_kL9ZaZc_wrpBJhG1Jk5IUgA-rByJ9HMVRsHLY"
 */
