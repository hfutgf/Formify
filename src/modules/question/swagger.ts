/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Operation with questions
 */

/**
 * @swagger
 * /api/questions/{templateId}:
 *   post:
 *     summary: Create a question by template ID
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         description: ID of the template to create the question for
 *         schema:
 *           type: integer
 *           example: 10
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionType:
 *                 type: string
 *                 enum: [TEXT, MULTICHOICE, RADIO]
 *                 example: "TEXT"
 *               title:
 *                 type: string
 *                 example: "Title"
 *               description:
 *                 type: string
 *                 example: "Description"
 *               isVisible:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Successfully created the question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 16
 *                 templateId:
 *                   type: integer
 *                   example: 10
 *                 questionType:
 *                   type: string
 *                   example: "TEXT"
 *                 title:
 *                   type: string
 *                   example: "Test"
 *                 description:
 *                   type: string
 *                   example: "Hello world"
 *                 order:
 *                   type: integer
 *                   example: 5
 *                 isVisible:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:39:54.905"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/questions/{questionId}:
 *   put:
 *     summary: Update a question by ID
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID of the question to be updated
 *         schema:
 *           type: integer
 *           example: 16
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionType:
 *                 type: string
 *                 enum: [TEXT, MULTICHOICE, RADIO]
 *                 example: "TEXT"
 *               title:
 *                 type: string
 *                 example: "Test"
 *               description:
 *                 type: string
 *                 example: "Hello world"
 *               isVisible:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Successfully updated the question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 16
 *                 templateId:
 *                   type: integer
 *                   example: 10
 *                 questionType:
 *                   type: string
 *                   example: "TEXT"
 *                 title:
 *                   type: string
 *                   example: "Test"
 *                 description:
 *                   type: string
 *                   example: "Hello world"
 *                 order:
 *                   type: integer
 *                   example: 5
 *                 isVisible:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:39:54.905"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/questions/{questionId}:
 *   delete:
 *     summary: Delete a question by ID
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID of the question to be deleted
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Successfully deleted the question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 10
 *                 templateId:
 *                   type: integer
 *                   example: 10
 *                 questionType:
 *                   type: string
 *                   example: "RADIO"
 *                 title:
 *                   type: string
 *                   example: "3"
 *                 description:
 *                   type: string
 *                   example: "3"
 *                 order:
 *                   type: integer
 *                   example: 3
 *                 isVisible:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-16T01:45:45.895"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Question not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/questions/{templateId}:
 *   get:
 *     summary: Retrieve questions by template ID
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         description: ID of the template to retrieve questions from
 *         schema:
 *           type: integer
 *           example: 7
 *     responses:
 *       200:
 *         description: Successfully retrieved questions for the template
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 16
 *                   templateId:
 *                     type: integer
 *                     example: 7
 *                   questionType:
 *                     type: string
 *                     example: "TEXT"
 *                   title:
 *                     type: string
 *                     example: "Test"
 *                   description:
 *                     type: string
 *                     example: "Hello world"
 *                   order:
 *                     type: integer
 *                     example: 1
 *                   isVisible:
 *                     type: boolean
 *                     example: true
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-18T17:39:54.905"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: null
 *       404:
 *         description: No questions found for the specified template ID
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/questions/question/{questionId}:
 *   get:
 *     summary: Retrieve a specific question by ID
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID of the question to retrieve
 *         schema:
 *           type: integer
 *           example: 8
 *     responses:
 *       200:
 *         description: Successfully retrieved the question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 8
 *                 templateId:
 *                   type: integer
 *                   example: 10
 *                 questionType:
 *                   type: string
 *                   example: "RADIO"
 *                 title:
 *                   type: string
 *                   example: "Sample Question"
 *                 description:
 *                   type: string
 *                   example: "This is a description of the question."
 *                 order:
 *                   type: integer
 *                   example: 1
 *                 isVisible:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-16T01:45:45.895"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Question not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/options/{questionId}:
 *   post:
 *     summary: Create an option for a specific question
 *     tags: [Options]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID of the question to which the option belongs
 *         schema:
 *           type: integer
 *           example: 8
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Sample option text"
 *     responses:
 *       201:
 *         description: Option created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 18
 *                 questionId:
 *                   type: integer
 *                   example: 8
 *                 text:
 *                   type: string
 *                   example: ""
 *                 order:
 *                   type: integer
 *                   example: 1
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:50:21.30063"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 *       400:
 *         description: Bad request (e.g., missing or invalid data)
 *       404:
 *         description: Question not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/options/{optionId}:
 *   put:
 *     summary: Update a specific option
 *     tags: [Options]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: optionId
 *         required: true
 *         description: ID of the option to be updated
 *         schema:
 *           type: integer
 *           example: 18
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Updated option text"
 *     responses:
 *       200:
 *         description: Option updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 18
 *                 questionId:
 *                   type: integer
 *                   example: 8
 *                 text:
 *                   type: string
 *                   example: "Updated option text"
 *                 order:
 *                   type: integer
 *                   example: 1
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:50:21.30063"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T17:50:21.30063"
 *       400:
 *         description: Bad request (e.g., missing or invalid data)
 *       404:
 *         description: Option not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/options/{questionId}:
 *   get:
 *     summary: Get all options for a specific question
 *     tags: [Options]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID of the question to retrieve options for
 *         schema:
 *           type: integer
 *           example: 8
 *     responses:
 *       200:
 *         description: Successful retrieval of options
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 18
 *                   questionId:
 *                     type: integer
 *                     example: 8
 *                   text:
 *                     type: string
 *                     example: "Option text"
 *                   order:
 *                     type: integer
 *                     example: 1
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-18T17:50:21.30063"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: null
 *       404:
 *         description: Question not found or no options available
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/question-types:
 *   get:
 *     summary: Retrieve available question types
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful retrieval of question types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 enum:
 *                   - "TEXT"
 *                   - "MULTICHOICE"
 *                   - "RADIO"
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/options-orders/{questionId}:
 *   put:
 *     summary: Update the order of options for a specific question
 *     tags: [Options]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: The ID of the question for which to update option orders
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [8, 12, 9, 10, 11]
 *     responses:
 *       200:
 *         description: Successfully updated option orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 8
 *                   questionId:
 *                     type: integer
 *                     example: 11
 *                   text:
 *                     type: string
 *                     example: "fsda"
 *                   order:
 *                     type: integer
 *                     example: 1
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-18T18:02:32.597"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: null
 *       400:
 *         description: Bad request, invalid IDs provided
 *       404:
 *         description: No options found for the specified question ID
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/questions-order:
 *   put:
 *     summary: Update the order of questions
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [17, 16]
 *     responses:
 *       200:
 *         description: Successfully updated question orders
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
 *                   templateId:
 *                     type: integer
 *                     example: 12
 *                   questionType:
 *                     type: string
 *                     example: "MULTICHOICE"
 *                   title:
 *                     type: string
 *                     example: "multichoice"
 *                   description:
 *                     type: string
 *                     example: "11"
 *                   order:
 *                     type: integer
 *                     example: 1
 *                   isVisible:
 *                     type: boolean
 *                     example: true
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-18T18:06:16.646"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: null
 *       400:
 *         description: Bad request, invalid IDs provided
 *       404:
 *         description: No questions found for the specified IDs
 *       500:
 *         description: Internal server error
 */
