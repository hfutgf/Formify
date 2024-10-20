/**
 * @swagger
 * tags:
 *   name: Template likes
 *   description: Operation with temoplate like
 */

/**
 * @swagger
 * /api/template/likes:
 *   post:
 *     summary: Like a template
 *     tags: [Template likes]
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
 *               templateId:
 *                 type: integer
 *                 example: 5
 *               value:
 *                 type: string
 *                 enum: [LIKE]
 *                 example: "LIKE"
 *     responses:
 *       201:
 *         description: Successfully liked the template
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 42
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 templateId:
 *                   type: integer
 *                   example: 5
 *                 value:
 *                   type: string
 *                   example: "LIKE"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Template not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/template/likes/{likeId}:
 *   delete:
 *     summary: Remove like from template
 *     tags: [Template likes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: likeId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the like to remove
 *     responses:
 *       200:
 *         description: Successfully removed like
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 42
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 templateId:
 *                   type: integer
 *                   example: 5
 *                 value:
 *                   type: string
 *                   example: "LIKE"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Like not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/template/likes/{templateId}:
 *   get:
 *     summary: Get all likes for a specific template
 *     tags: [Template likes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the template to get likes for
 *     responses:
 *       200:
 *         description: Successfully retrieved likes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 42
 *                   userId:
 *                     type: integer
 *                     example: 1
 *                   templateId:
 *                     type: integer
 *                     example: 5
 *                   value:
 *                     type: string
 *                     example: "LIKE"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Template not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/template/likes/{templateId}/{authorId}:
 *   get:
 *     summary: Get like information by template ID and author ID
 *     tags: [Template likes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the template
 *       - in: path
 *         name: authorId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the author (user who liked)
 *     responses:
 *       200:
 *         description: Successfully retrieved like information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 42
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 templateId:
 *                   type: integer
 *                   example: 5
 *                 value:
 *                   type: string
 *                   example: "LIKE"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Like not found
 *       500:
 *         description: Internal server error
 */
