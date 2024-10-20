from flask import request, jsonify, Blueprint
from . import db
from .models import Task

tasks_bp = Blueprint('tasks', __name__)
@tasks_bp.route('/tasks', methods=['POST'])
def create_task():
    data = request.json
    new_task = Task(title=data['title'])
    db.session.add(new_task)
    db.session.commit()
    return jsonify(new_task.to_dict()), 201

@tasks_bp.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])

@tasks_bp.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = Task.query.get_or_404(task_id)
    data = request.json
    task.title = data.get('title', task.title)
    task.done = data.get('done', task.done)
    db.session.commit()
    return jsonify(task.to_dict())

@tasks_bp.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = Task.query.get_or_404(task_id)
    db.session.delete(task)
    db.session.commit()
    return '', 204
