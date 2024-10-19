/**
 * @swagger
 * tags:
 *   name: Options
 *   description: Operation with options
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
