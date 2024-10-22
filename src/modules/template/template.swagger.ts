/**
 * @swagger
 * tags:
 *   name: Templates
 *   description: Operation with templates
 */

/**
 * @swagger
 * /api/templates:
 *   post:
 *     summary: Create template
 *     tags: [Templates]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *                 example: Template name
 *               description:
 *                 type: string
 *                 example: Description about template
 *               theme:
 *                 type: string
 *                 example: OTHER
 *     responses:
 *       201:
 *         description: Successful form retrieval
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 13
 *                 authorId:
 *                   type: integer
 *                   example: 4
 *                 title:
 *                   type: string
 *                   example: "my first form"
 *                 description:
 *                   type: string
 *                   example: "It was really hard to achieve this, you know it yourself))"
 *                 theme:
 *                   type: string
 *                   example: "SPORT"
 *                 imageUrl:
 *                   type: string
 *                   format: url
 *                   example: "https://firebasestorage.googleapis.com/v0/b/course-project-1ee22.appspot.com/o/templates%2Fexample.png"
 *                 isPublic:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:08:12.145"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/templates/{templateId}:
 *   put:
 *     summary: Update template
 *     tags: [Templates]
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the template to update
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *                 example: Template name
 *               description:
 *                 type: string
 *                 example: Description about template
 *               theme:
 *                 type: string
 *                 example: OTHER
 *     responses:
 *       200:
 *         description: Successful template update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 13
 *                 authorId:
 *                   type: integer
 *                   example: 4
 *                 title:
 *                   type: string
 *                   example: "my first form"
 *                 description:
 *                   type: string
 *                   example: "It was really hard to achieve this, you know it yourself))"
 *                 theme:
 *                   type: string
 *                   example: "SPORT"
 *                 imageUrl:
 *                   type: string
 *                   format: url
 *                   example: "https://firebasestorage.googleapis.com/v0/b/course-project-1ee22.appspot.com/o/templates%2Fexample.png"
 *                 isPublic:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:08:12.145"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/templates/{templateId}:
 *   parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the template to update
 *   delete:
 *     summary: Delete template
 *     tags: [Templates]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful form retrieval
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 13
 *                 authorId:
 *                   type: integer
 *                   example: 4
 *                 title:
 *                   type: string
 *                   example: "my first form"
 *                 description:
 *                   type: string
 *                   example: "It was really hard to achieve this, you know it yourself))"
 *                 theme:
 *                   type: string
 *                   example: "SPORT"
 *                 imageUrl:
 *                   type: string
 *                   format: url
 *                   example: "https://firebasestorage.googleapis.com/v0/b/course-project-1ee22.appspot.com/o/templates%2Fexample.png"
 *                 isPublic:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:08:12.145"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/templates:
 *   get:
 *     summary: Retrieve grouped templates by theme
 *     tags: [Templates]
 *     responses:
 *       200:
 *         description: List of templates grouped by theme
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   theme:
 *                     type: string
 *                     example: SPORT
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 13
 *                         authorId:
 *                           type: integer
 *                           example: 4
 *                         title:
 *                           type: string
 *                           example: "Tempalte title"
 *                         description:
 *                           type: string
 *                           nullable: true
 *                           example: "Description about template"
 *                         theme:
 *                           type: string
 *                           example: "SPORT"
 *                         imageUrl:
 *                           type: string
 *                           format: url
 *                           nullable: true
 *                           example: "https://firebasestorage.googleapis.com/v0/b/course-project-1ee22.appspot.com/o/templates%2Fexample.png"
 *                         isPublic:
 *                           type: boolean
 *                           example: true
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-10-18T17:08:12.145"
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                           nullable: true
 *                           example: null
 */

/**
 * @swagger
 * /api/template-themes:
 *   get:
 *     summary: Retrieve a list of available themes
 *     tags: [Templates]
 *     responses:
 *       200:
 *         description: List of themes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 example: "SPORT"
 */

/**
 * @swagger
 * /api/templates-search:
 *   get:
 *     summary: Search for templates by title
 *     tags: [Templates]
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         description: Title of the template to search for
 *         schema:
 *           type: string
 *           example: "Tempalte title"
 *     responses:
 *       200:
 *         description: List of templates matching the search criteria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 12
 *                   authorId:
 *                     type: integer
 *                     example: 2
 *                   title:
 *                     type: string
 *                     example: "hello"
 *                   description:
 *                     type: string
 *                     nullable: true
 *                     example: null
 *                   theme:
 *                     type: string
 *                     example: "STUDY"
 *                   imageUrl:
 *                     type: string
 *                     nullable: true
 *                     format: url
 *                     example: null
 *                   isPublic:
 *                     type: boolean
 *                     example: true
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-17T18:27:28.742"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: null
 */

/**
 * @swagger
 * /api/templates/{id}:
 *   get:
 *     summary: Get a single template by ID
 *     tags: [Templates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the template to retrieve
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Successfully retrieved the template
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 authorId:
 *                   type: integer
 *                   example: 4
 *                 title:
 *                   type: string
 *                   example: "my first form"
 *                 description:
 *                   type: string
 *                   nullable: true
 *                   example: "It was really hard to achieve this, you know it yourself))"
 *                 theme:
 *                   type: string
 *                   example: "SPORT"
 *                 imageUrl:
 *                   type: string
 *                   nullable: true
 *                   format: url
 *                   example: "https://firebasestorage.googleapis.com/v0/b/course-project-1ee22.appspot.com/o/templates%2Fexample.png"
 *                 isPublic:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:08:12.145"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Template not found
 */

/**
 * @swagger
 * /api/templates/{authorId}:
 *   get:
 *     summary: Get templates by user ID
 *     tags: [Templates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: authorId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user whose templates you want to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved templates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 13
 *                   authorId:
 *                     type: integer
 *                     example: 4
 *                   title:
 *                     type: string
 *                     example: "My first template"
 *                   description:
 *                     type: string
 *                     example: "Description about template"
 *                   theme:
 *                     type: string
 *                     example: "SPORT"
 *                   imageUrl:
 *                     type: string
 *                     format: url
 *                     example: "https://example.com/image.png"
 *                   isPublic:
 *                     type: boolean
 *                     example: true
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-18T17:08:12.145"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: null
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/theme/templates:
 *   get:
 *     summary: Get templates by theme
 *     tags: [Templates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: theme
 *         required: true
 *         description: The theme of the templates to retrieve
 *         schema:
 *           type: string
 *           example: "SPORT"
 *     responses:
 *       200:
 *         description: Successfully retrieved templates by theme
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
 *                   authorId:
 *                     type: integer
 *                     example: 2
 *                   title:
 *                     type: string
 *                     example: "Sports Event Template"
 *                   description:
 *                     type: string
 *                     nullable: true
 *                     example: "A template for organizing sports events."
 *                   theme:
 *                     type: string
 *                     example: "SPORT"
 *                   imageUrl:
 *                     type: string
 *                     nullable: true
 *                     example: "https://example.com/sports-event.jpg"
 *                   isPublic:
 *                     type: boolean
 *                     example: true
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-22T10:00:00Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: "2024-10-22T12:00:00Z"
 *       404:
 *         description: No templates found for the specified theme
 */
