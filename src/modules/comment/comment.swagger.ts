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

/**
 * @swagger
 * tags:
 *   name: Comment likes
 *   description: Operation with template comments
 */

/**
 * @swagger
 * /api/comment/likes:
 *   post:
 *     summary: Like a comment
 *     tags: [Comment likes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               commentId:
 *                 type: integer
 *                 example: 1
 *               value:
 *                 type: string
 *                 example: LIKE
 *     responses:
 *       200:
 *         description: Successfully liked the comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 commentId:
 *                   type: integer
 *                   example: 1
 *                 value:
 *                   type: string
 *                   example: LIKE
 *       400:
 *         description: Bad request
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/comment/likes/{likeID}:
 *   delete:
 *     summary: Remove like from a comment
 *     tags: [Comment likes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: likeID
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the like to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the like
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 commentId:
 *                   type: integer
 *                   example: 1
 *                 value:
 *                   type: string
 *                   example: LIKE
 *       404:
 *         description: Like not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/comment/likes/{commentId}:
 *   get:
 *     summary: Get all likes for a specific comment
 *     tags: [Comment likes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the comment to retrieve likes for
 *     responses:
 *       200:
 *         description: Successfully retrieved comment likes
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
 *                   userId:
 *                     type: integer
 *                     example: 1
 *                   commentId:
 *                     type: integer
 *                     example: 1
 *                   value:
 *                     type: string
 *                     example: LIKE
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
