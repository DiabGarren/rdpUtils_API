import express from 'express';
import users from './users';
import wardCouncil from './wardCouncil';
import bishopric from './bishopric';

const router = express.Router();

router.use('/', express.static('public/'));
router.use('/login', express.static('public/login/'));
router.use('/dashboard', express.static('public/dashboard/'));
router.use('/logout', express.static('public/logout/'));
router.use('/users', users);
router.use('/wardCouncil', wardCouncil);
router.use('/bishopric', bishopric);

export = router;