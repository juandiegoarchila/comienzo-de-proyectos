// src/controllers/userControllers.js

import { db } from '../config/config.js';
import { validationResult } from 'express-validator'; //no se esta utilizando validationResult parece que no porque no esta en azul 

// Obtener usuarios
export const getUsers = async (req, res) => {
  try {
    const usersSnapshot = await db.collection('users').get();
    const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};

// Crear usuario
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = {
      name,
      email,
      testUser: req.body.testUser || false,
      createdAt: new Date()
    };

    const userRef = await db.collection('users').add(newUser);

    res.status(201).json({ id: userRef.id, message: 'Usuario creado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error });
  }
};


// Actualizar usuario
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!name && !email) {
    return res.status(400).json({ message: 'Nada que actualizar' });
  }

  try {
    await db.collection('users').doc(id).update({ name, email });
    res.json({ message: 'Usuario actualizado con éxito' });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ message: 'Error al actualizar usuario' });
  }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userRef = db.collection('users').doc(id);
    const userSnap = await userRef.get();

    if (!userSnap.exists) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    await userRef.delete();
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    console.error('❌ Error eliminando usuario:', error);
    res.status(500).json({ message: 'Error eliminando usuario' });
  }
};


