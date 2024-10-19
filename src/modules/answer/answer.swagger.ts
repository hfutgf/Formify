/**
 * @swagger
 * tags:
 *   name: Answers
 *   description: Operation with answers
 */

/**
 * @swagger
 * /api/answers:
 *   post:
 *     summary: Create a new answer for a specific question in a form
 *     tags: [Answers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               formId:
 *                 type: integer
 *                 example: 4
 *               questionId:
 *                 type: integer
 *                 example: 7
 *               answerValue:
 *                 type: string
 *                 example: "Example"
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: ["1", "2"]
 *     responses:
 *       201:
 *         description: Successfully created a new answer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 41
 *                 formId:
 *                   type: integer
 *                   example: 5
 *                 questionId:
 *                   type: integer
 *                   example: 11
 *                 answerValue:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       400:
 *         description: Bad request
 *       404:
 *         description: Form or question not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/answers/{id}:
 *   put:
 *     summary: Update an existing answer
 *     tags: [Answers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the answer to update
 *         schema:
 *           type: integer
 *           example: 41
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               formId:
 *                 type: integer
 *                 example: 4
 *               questionId:
 *                 type: integer
 *                 example: 7
 *               answerValue:
 *                 type: string
 *                 example: "Updated answer value"
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: ["1", "3"]
 *     responses:
 *       200:
 *         description: Successfully updated the answer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 41
 *                 formId:
 *                   type: integer
 *                   example: 4
 *                 questionId:
 *                   type: integer
 *                   example: 7
 *                 answerValue:
 *                   type: string
 *                   example: "Updated answer value"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Answer not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/answers/{formId}:
 *   get:
 *     summary: Get answers by form ID
 *     tags: [Answers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: formId
 *         in: path
 *         required: true
 *         description: The ID of the form to retrieve answers for
 *         schema:
 *           type: integer
 *           example: 14
 *     responses:
 *       200:
 *         description: A list of answers for the specified form
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 41
 *                   formId:
 *                     type: integer
 *                     example: 14
 *                   questionId:
 *                     type: integer
 *                     example: 7
 *                   answerValue:
 *                     type: string
 *                     example: "Example"
 *                   options:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: ["1", "2"]
 *       404:
 *         description: No answers found for the specified form
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/answers/{answerId}:
 *   delete:
 *     summary: Delete an answer by ID
 *     tags: [Answers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: answerId
 *         in: path
 *         required: true
 *         description: The ID of the answer to delete
 *         schema:
 *           type: integer
 *           example: 41
 *     responses:
 *       204:
 *         description: Answer successfully deleted
 *       404:
 *         description: Answer not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/answers/{answerId}:
 *   put:
 *     summary: Update an answer by ID
 *     tags: [Answers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: answerId
 *         in: path
 *         required: true
 *         description: The ID of the answer to update
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
 *               answerValue:
 *                 type: string
 *                 example: "Example"
 *     responses:
 *       200:
 *         description: Answer successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 8
 *                 answerValue:
 *                   type: string
 *                   example: "Example"
 *       404:
 *         description: Answer not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/answer-options/{answerId}:
 *   get:
 *     summary: Get answer options by answer ID
 *     tags: [Answers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: answerId
 *         in: path
 *         required: true
 *         description: The ID of the answer for which to retrieve options
 *         schema:
 *           type: integer
 *           example: 4
 *     responses:
 *       200:
 *         description: Successfully retrieved answer options
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
 *                   answerId:
 *                     type: integer
 *                     example: 4
 *                   text:
 *                     type: string
 *                     example: "Option 1"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-18T18:00:00Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: null
 *       404:
 *         description: Answer options not found
 *       500:
 *         description: Internal server error
 */
