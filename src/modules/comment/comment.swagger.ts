/**
 * @swagger
 * tags:
 *   name: Template comments
 *   description: Operation with template comments
 */

/**
 * @swagger
 * /api/template/comments:
 *   post:
 *     summary: Create a new answer for a specific question in a form
 *     tags: [Template comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               templateId:
 *                 type: integer
 *                 example: 10
 *               authorId:
 *                 type: integer
 *                 example: 4
 *               content:
 *                 type: string
 *                 example: "Example"
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
 *                 tempalteId:
 *                   type: integer
 *                   example: 5
 *                 authorId:
 *                   type: integer
 *                   example: 11
 *                 content:
 *                   type: string
 *                   example: "Content"
 *                 createdAt:
 *                   type: Date
 *                   example: "2024-10-18T17:08:12.145"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Form or question not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/template/comments/{templateId}:
 *   get:
 *     summary: Create a new comment for a specific template
 *     tags: [Template comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the template to which the comment belongs
 *     responses:
 *       201:
 *         description: Successfully created new comments
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
 *                   templateId:
 *                     type: integer
 *                     example: 5
 *                   authorId:
 *                     type: integer
 *                     example: 11
 *                   content:
 *                     type: string
 *                     example: "Content"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-18T17:08:12.145"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Template not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/template/comments/{commentId}:
 *   delete:
 *     summary: Create a new comment for a specific template
 *     tags: [Template comments]
 *     security:
 *       - bearerAuth: []   
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the template to which the comment belongs
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
 *                 tempalteId:
 *                   type: integer
 *                   example: 5
 *                 authorId:
 *                   type: integer
 *                   example: 11
 *                 content:
 *                   type: string
 *                   example: "Content"
 *                 createdAt:
 *                   type: Date
 *                   example: "2024-10-18T17:08:12.145"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Form or question not found
 *       500:
 *         description: Internal server error
 */
